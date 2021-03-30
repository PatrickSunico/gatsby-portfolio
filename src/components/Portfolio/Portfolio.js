import React from "react";
import PropTypes from "prop-types";

const Portfolio = (props) => {
    return (
        <section className="portfolio l-container">
            <div className="l-row">
                <div className="portfolio-selector">
                    <h3 className="font-size__lg font-weight__700">
                        Latest Work
                    </h3>

                    <div className="portfolio-select">
                        <p>Websites</p>
                        <p>Apps</p>
                    </div>
                </div>
                {/* <h1>Portfolio</h1> */}
            </div>
        </section>
        // <div className="l-container">
        //     <div className="l-row">
        //         <div className="column-12"></div>
        //         <div className="column-6">6</div>

        //         <div className="column-6">6</div>

        //         {/* <div className="column-12">12</div>
        //         <div className="column-11">11</div>
        //         <div className="column-10">10</div>
        //         <div className="column-9">9</div>
        //         <div className="column-8">8</div>
        //         <div className="column-7">7</div>
        //         <div className="column-6">6</div>
        //         <div className="column-5">5</div>
        //         <div className="column-4">4</div>
        //         <div className="column-3">3</div>
        //         <div className="column-2">2</div>
        //         <div className="column-1">1</div> */}
        //     </div>
        // </div>
    );
};

Portfolio.propTypes = {};

export default Portfolio;
