import { useState } from 'react'
import Globe from 'react-globe.gl'

import Button from '../components/Button.jsx'
import PixelPortrait from '../components/PixelPortrait.jsx'
import { GraduationCap } from 'lucide-react'

// Jo email dikhana aur copy karwana hai, wahi yahan ek baar likho
const EMAIL = 'faizan2225747523@gmail.com'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1: photo (particles) */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="flex justify-center sm:h-[276px]">
              <PixelPortrait src="/images/faizan.png" alt="Faizan" width={220} height={276} />
            </div>

            <div>
              <p className="grid-headtext">Hi, I’m Faizan Ahmad Ansari</p>
              {/* Ye text apne hisaab se badlo. Sirf wahi likho jo sach ho. */}
              <p className="grid-subtext">
                CSE (Data Science) student at Jamia Millia Islamia (JMI '28) <br></br>
                who builds full-stack web apps and interactive 3D experiences with React, Three.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: tech stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Full-stack development with MERN, PostgreSQL, TypeScript and Next.js. Currently going deep on DSA and exploring AI/ML.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: globe */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 28.5625, lng: 77.283, text: 'New Delhi, India', color: 'white', size: 15 }]}
              />
            </div>

            <div>
              <p className="grid-headtext">Based in New Delhi, working worldwide</p>
              <p className="grid-subtext">
                Open to remote work and flexible with time zones. I'm happy to collaborate with teams
                anywhere.
              </p>

              {/* college details */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <div>
                  <h3 className="font-semibold text-white">Jamia Millia Islamia (JMI '28)</h3>
                  <p className="text-sm text-orange-400">B.Tech CSE (Data Science)</p>
                  <p className="text-sm text-neutral-400">New Delhi, India • Batch of 2028</p>
                </div>
              </div>

              <a href="#contact" className="block">
                <Button name="Contact Me" isBeam containerClass="w-full mt-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">From Zero to Full-Stack</p>
              <p className="grid-subtext">
                I had no coding background before college. Since starting B.Tech CSE (Data Science), 
                I've been learning every day, solving complex DSA problems and building real-world projects.
              </p>
            </div>
          </div>
        </div>

      {/* Card 5: contact / copy email */}
<div className="xl:col-span-1 xl:row-span-2">
  <div className="grid-container">
    <img
      src="/assets/grid4.png"
      alt="grid-4"
      className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
    />

    <div className="space-y-2">
      <p className="grid-subtext text-center">Contact me</p>
      <button
        type="button"
        className="copy-container w-full max-w-full min-w-0 gap-2"
        onClick={handleCopy}
        aria-label="Copy email address">
        <img
          src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
          alt=""
          className="h-5 w-5 shrink-0"
        />
        <span className="min-w-0 break-all text-sm sm:text-base lg:text-lg font-medium text-gray-gradient">
          {EMAIL}
        </span>
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default About