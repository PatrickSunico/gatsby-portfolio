import React from "react"
import { Link } from "gatsby"

import "./HeroStyle.scss"

// Icons
import LinkedIn from "../../assets/icons/LinkedIn.svg"
import Behance from "../../assets/icons/Behance.svg"
import Github from "../../assets/icons/Github.svg"

const Hero = () => {
  return (
    <>
      <div className="bg-hero">
        <div className="flex-1 bg-hero__left">
          <div className="hero bg-hero__container">
            <div className="bg-hero__title-container bg-hero__vertical-center">
              <h3 className="bg-hero__title space-bottom">Patrick Sunico</h3>
              <p className="bg-hero__caption space-bottom">
                Frontend Developer & UI Designer
              </p>

              <div className="bg-hero__cta-container">
                <Link
                  to="/"
                  className="bg-hero__resume-btn w-full md:w-1/3 xl:w-2/6 px-6 py-4"
                >
                  My Resume
                </Link>

                <div className="bg-hero__social-container md:w-1/3 xl:w-1/3">
                  <LinkedIn className="bg-hero__social-icon" />
                  <Behance className="bg-hero__social-icon" />
                  <Github className="bg-hero__social-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-hero__right"></div>
      </div>
    </>
  )
}

export default Hero
