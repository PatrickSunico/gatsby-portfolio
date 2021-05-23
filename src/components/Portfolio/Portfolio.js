import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Intlq from "../../images/image-portrait.jpg";

// import ImagePortrait from "../../images/image-portrait.jpg";
const Portfolio = (props) => {
    return (
        <section className="portfolio l-container">
            <div className="l-column">
                <div className="portfolio-selector">
                    <h3 className="font-size__lg font-weight__700">
                        Latest Work
                    </h3>

                    <div className="portfolio-select">
                        <p>Websites</p>
                        <p>Apps</p>
                    </div>
                </div>

                {/* list of projects */}
                <div className="porfolio-list">
                    <div className="portfolio-item-container">
                        <div className="portfolio-text-container">
                            <h3>UI, UX, Web Design</h3>
                            <h2>INTLQ</h2>
                            <Link to="/">View Project</Link>
                            <div className="portfolio-social-icons">
                                <Link to="/">Behance</Link>
                                <Link to="/">Website</Link>
                                <Link to="/">Appstore</Link>
                                <Link to="/">Android Store</Link>
                            </div>
                        </div>
                        <div className="portfolio-image-container">
                            <img
                                src={Intlq}
                                alt="project"
                                className="portolio-img offset-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Portfolio.propTypes = {};

export default Portfolio;
