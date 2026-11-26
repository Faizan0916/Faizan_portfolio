import React from 'react'

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button
      className={`btn border border-orange-400/20 transition-colors duration-200 hover:border-orange-400/70 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-400" />
        </span>
      )}
      {name}
    </button>
  )
}

export default Button