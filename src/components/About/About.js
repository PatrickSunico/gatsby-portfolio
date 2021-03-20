import React from "react";
import ImagePortrait from "../../images/image-portrait.jpg";
// import PatternBG from "../../images/bg-pattern.png";
import PatternBGLeft from "../../images/bg-pattern-left.svg";
import PatternBGRight from "../../images/bg-pattern-right.svg";

const About = () => {
    return (
        <section className="about">
            <div
                className="about__bg-pattern-left"
                style={{ backgroundImage: `url(${PatternBGLeft})` }}
            ></div>

            <div
                className="about__bg-pattern-right"
                style={{ backgroundImage: `url(${PatternBGRight})` }}
            ></div>

            {/* Element */}
            <div className="about__container">
                {/* Left */}
                <div className="flex-1 about__left">
                    <div
                        className="about__image-placement"
                        style={{ backgroundImage: `url(${ImagePortrait})` }}
                    ></div>
                    {/* <div className="about__container__image-placement w-full">
                        <img
                            src={ImagePortrait}
                            alt="portrait"
                            className="w-full"
                        />
                    </div> */}
                </div>

                {/* Right */}
                <div className="flex-1 about__right ">
                    <div className="about__description">
                        <div className="about__text-details">
                            <h2 className="font-lg">
                                Hello, I’m Patrick Frontend Developer and UI
                                Designer
                            </h2>
                            <br />
                            <br />
                            <br />
                            <p className="font-xs">
                                I'm a dreamer and a web aficionado, I like to
                                implement ideas into an actual product and build
                                up on that idea to make it more robust and
                                scalable when it comes to websites,
                                <br />
                                <br />
                                <br />
                                Here you can see a selection of my best web
                                design wireframes not just websites, but right
                                brain stuffs too such as logo designs and many
                                more
                            </p>
                        </div>

                        <div className="about__experience"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
