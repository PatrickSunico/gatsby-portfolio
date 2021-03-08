import React from "react"
import { Link } from "gatsby"
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap sm:flex-row-reverse items-stretch h-screen">
        <div className="w-full flex-1 h-full bg-black-600">test</div>
        {/* <div
          className="w-full md:w-1/2 xl:w-3/5 bg-cover flex"
          style={{ backgroundImage: `url('${leftBG}')` }}
        >
          {left}
        </div> */}
        <div className="w-full h-full flex-1 bg-blue-lightest"></div>
      </div>
    </>
  )
}

export default Hero
