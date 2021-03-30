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
                <div className="">
                    <div className="l-row l-column">
                        <div className="column-6 bg-hero__left">
                            <div className="bg-hero__title-container bg-hero__vertical-center ">
                                <h3 className="bg-hero__title space-bottom font-size__xl">
                                    Patrick Sunico
                                </h3>
                                <p className="bg-hero__caption space-bottom font-size__sm">
                                    Frontend Developer & UI Designer
                                </p>
                            </div>
                        </div>

                        <div className="column-6 bg-hero__right"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
