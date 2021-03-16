import React from "react";
import ImagePortrait from "../../images/image-portrait.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="flex-1 about__left">
                <div className="about__image-placement"></div>
            </div>

            <div className="flex-1 about__right">
                <div className="about__description">
                    <h2>
                        Hello, I’m Patrick Frontend Developer and UI Designer
                    </h2>
                    <br />
                    <br />
                    <br />
                    <p>
                        I'm a dreamer and a web aficionado, I like to implement
                        ideas into an actual product and build up on that idea
                        to make it more robust and scalable when it comes to
                        websites,
                        <br />
                        <br />
                        Here you can see a selection of my best web design
                        wireframes not just websites, but right brain stuffs too
                        such as logo designs and many more
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
