import React from "react";
import ImagePortrait from "../../images/image-portrait.jpg";
// import PatternBG from "../../images/bg-pattern.png";
import PatternBGLeft from "../../images/bg-pattern-left.svg";
import PatternBGRight from "../../images/bg-pattern-right.svg";

const About = () => {
    return (
        <section className="about">
            {/* Element */}
            <div className="about-container l-container">
                {/* Left */}
                <div className="flex-1 about-left">
                    <div
                        className="about__bg-image"
                        style={{ backgroundImage: `url(${ImagePortrait})` }}
                    ></div>
                </div>

                {/* Right */}
                <div className="flex-1 about-right ">
                    <div className="about-description">
                        <div className="about__text-details">
                            <h2 className="font-size__lg">
                                Hello, I’m Patrick Frontend Developer and UI
                                Designer
                            </h2>
                            <br />
                            <br />
                            <p className="font-size__xs">
                                I'm a dreamer and a web aficionado, I like to
                                implement ideas into an actual product and build
                                up on that idea to make it more robust and
                                scalable when it comes to websites,
                                <br />
                                <br />
                                Here you can see a selection of my best web
                                design wireframes not just websites, but right
                                brain stuffs too such as logo designs and many
                                more
                            </p>
                        </div>

                        <div className="about-experience-container">
                            <h3 className="font-size__xs font-weight__700">
                                Experience
                            </h3>
                            <div className="about-experience">
                                <div className="about-experience-block l-row">
                                    {/* Position */}
                                    <div className="about-experience-position column-6">
                                        <h4 className="font-size__xs font-weight__500">
                                            Catalyst
                                        </h4>
                                        <p className="font-weight__100">
                                            Frontend Developer / UI Developer
                                        </p>
                                    </div>

                                    {/* Date */}
                                    <div className="about-experience-date column-6">
                                        <h4 className="font-size__xs font-weight__100">
                                            2017-Present
                                        </h4>
                                        <p className="font-weight__100">
                                            Doha, Qatar
                                        </p>
                                    </div>
                                </div>

                                <div className="about-experience-block l-row">
                                    {/* Position */}
                                    <div className="about-experience-position column-6">
                                        <h4 className="font-size__xs font-weight__500">
                                            Chariot Solutions
                                        </h4>
                                        <p className="font-weight__100">
                                            Frontend Developer / UI Developer
                                        </p>
                                    </div>

                                    {/* Date */}
                                    <div className="about-experience-date column-6">
                                        <h4 className="font-size__xs font-weight__100">
                                            2016-2017
                                        </h4>
                                        <p className="font-weight__100">
                                            Doha, Qatar
                                        </p>
                                    </div>
                                </div>

                                <div className="about-experience-block l-row">
                                    {/* Position */}
                                    <div className="about-experience-position column-6">
                                        <h4 className="font-size__xs font-weight__500">
                                            Mannai Corporation
                                        </h4>
                                        <p className="font-weight__100">
                                            Junior Developer / Designer
                                        </p>
                                    </div>

                                    {/* Date */}
                                    <div className="about-experience-date column-6">
                                        <h4 className="font-size__xs font-weight__100">
                                            2016-2017
                                        </h4>
                                        <p className="font-weight__100">
                                            Doha, Qatara
                                        </p>
                                    </div>
                                </div>

                                <div className="about-experience-block l-row">
                                    {/* Position */}
                                    <div className="about-experience-position column-6">
                                        <h4 className="font-size__xs font-weight__500">
                                            Web Outsourcing Gateway
                                        </h4>
                                        <p className="font-weight__100">
                                            Junior Developer / Designer
                                        </p>
                                    </div>

                                    {/* Date */}
                                    <div className="about-experience-date column-6">
                                        <h4 className="font-size__xs font-weight__100">
                                            2015-2016
                                        </h4>
                                        <p className="font-weight__100">
                                            Pasig, Philippines
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
