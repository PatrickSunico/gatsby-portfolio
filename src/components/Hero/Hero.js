import React from "react"
import { Link } from "gatsby"

import "./HeroStyle.scss"

const Hero = () => {
  return (
    <>
      <div className="bg-hero flex flex-wrap items-stretch h-screen max-w-screen=lg x:max-w-screen-xl overflow-hidden">
        <div className="w-full flex-1 h-70 bg-hero__left flex justify-center items-center">
          <div className="bg-hero__title-container flex justify-start flex-col">
            <h1 className="bg-hero__title">Patrick Sunico</h1>
            <h2 className="bg-hero__caption">
              A Frontend Developer & UI Designer
            </h2>
            <Link to="/"> My Resume </Link>

            <div className="bg-hero__social"></div>
          </div>
        </div>
        <div className="w-full h-70 flex-1 bg-hero__right"></div>
      </div>
    </>
  )
}

export default Hero
