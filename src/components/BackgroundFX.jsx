import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Waves } from 'lucide-react'
import './backgroundFX.css'

/* ---- settings: yahan se effect tweak karo ---- */
const COLS = 180 // dots ki width
const ROWS = 100 // dots ki depth (zyada = door tak)
const SPACING = 0.45 // dots ke beech gap
const DOT_SIZE = 0.07
const DOT_COLOR = 0x9a9ba3
const DOT_OPACITY = 0.55
const WAVE_HEIGHT = 0.55
const WAVE_SPEED = 0.8

function Wave() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 120)
    camera.position.set(0, 3.5, 12)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // dots ka grid banao
    const count = COLS * ROWS
    const positions = new Float32Array(count * 3)
    let p = 0
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        positions[p++] = (c - COLS / 2) * SPACING // x
        positions[p++] = 0 // y (har frame update hota hai)
        positions[p++] = 8 - r * SPACING // z
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: DOT_COLOR,
      size: DOT_SIZE,
      sizeAttenuation: true,
      transparent: true,
      opacity: DOT_OPACITY,
      depthWrite: false,
    })

    scene.add(new THREE.Points(geometry, material))

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    // mouse parallax
    const mouse = { x: 0 }
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)

    const clock = new THREE.Clock()
    let frame = 0

    const render = (t) => {
      const pos = geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        const x = pos[i * 3]
        const z = pos[i * 3 + 2]
        pos[i * 3 + 1] =
          Math.sin(x * 0.32 + t * WAVE_SPEED) * WAVE_HEIGHT +
          Math.cos(z * 0.28 + t * WAVE_SPEED * 0.75) * WAVE_HEIGHT -
          3
      }
      geometry.attributes.position.needsUpdate = true

      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.04
      camera.lookAt(0, -2, -6)
      renderer.render(scene, camera)
    }

    const loop = () => {
      render(clock.getElapsedTime())
      frame = requestAnimationFrame(loop)
    }

    if (reduceMotion) render(0) // sirf ek still frame
    else loop()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fx-canvas" aria-hidden="true" />
}

export default function BackgroundFX() {
  const [on, setOn] = useState(() => {
    try {
      return localStorage.getItem('bg-fx') === 'on'
    } catch {
      return false
    }
  })

  const toggle = () => {
    const next = !on
    setOn(next)
    try {
      localStorage.setItem('bg-fx', next ? 'on' : 'off')
    } catch {
      /* storage band ho to koi baat nahi */
    }
  }

  return (
    <>
      {on && <Wave />}
      <button
        type="button"
        className={`fx-toggle ${on ? 'is-on' : ''}`}
        onClick={toggle}
        aria-pressed={on}
        aria-label="Toggle 3D background"
        title={on ? 'Turn off 3D background' : 'Turn on 3D background'}>
        <Waves size={20} />
      </button>
    </>
  )
}