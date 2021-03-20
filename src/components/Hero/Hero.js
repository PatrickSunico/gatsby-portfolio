import React from "react";
import { Link } from "gatsby";

// Icons
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import Behance from "../../assets/icons/Behance.svg";
import Github from "../../assets/icons/Github.svg";

const Hero = () => {
    return (
        <>
            <div className="bg-hero">
                <div className="bg-hero__container ">
                    <div className="flex-1 bg-hero__left ">
                        <div className="hero bg-hero__container ">
                            <div className="bg-hero__title-container bg-hero__vertical-center ">
                                <h3 className="bg-hero__title space-bottom font-xxl">
                                    Patrick Sunico
                                </h3>
                                <p className="bg-hero__caption space-bottom font-md">
                                    Frontend Developer & UI Designer
                                </p>

                                <div className="bg-hero__cta-container my-4 xl:my-8">
                                    <Link
                                        to="/"
                                        className="bg-hero__resume-btn justify-center px-6 py-3 border border-transparent text-base 
                                    "
                                    >
                                        My Resume
                                    </Link>
                                    <div className="bg-hero__social-container space-x-10">
                                        <LinkedIn className="bg-hero__social-icon" />
                                        <Behance className="bg-hero__social-icon" />
                                        <Github className="bg-hero__social-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-hero__right p-4">Test</div>
                </div>
            </div>
        </>
    );
};

export default Hero;
