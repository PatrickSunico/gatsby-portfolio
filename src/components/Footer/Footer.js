import React from "react";

const Footer = () => {
    return (
        <div className="container">
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`
                }}
            >
                {/* <main>{children}</main> */}
                <footer
                    style={{
                        marginTop: `2rem`
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
