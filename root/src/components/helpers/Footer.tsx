import React from "react";
import "./footer.css";
import logo from "../../assets/images/cikm-logo-removebg-preview.png";

const Footer = () => {
    return (
        <footer className="footer has-background-light py-4">
            <div className="footer-container">
                {/* Logo aligned to the left on large screens */}
                <div className="footer-logo-wrapper">
                    <a
                        href="https://cikm2025.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logo}
                            alt="CIKM 2025 Logo"
                            className="footer-logo"
                        />
                    </a>
                </div>

                {/* Text centered */}
                <div className="footer-text has-text-centered">
                    <p className="has-text-weight-semibold">
                        <span style={{color: "#e63946"}}>R</span>
                        <span style={{color: "#f4a300"}}>S</span>
                        <span style={{color: "#4CAF50"}}>4</span>
                        <span style={{color: "#1d3557"}}>SD</span> Workshop @ CIKM 2025, Seoul, Korea
                    </p>
                    <p className="has-text-success is-italic" style={{fontSize: "x-small"}}>
                        {/*© All rights reserved*/}
                        The website image and logo were created using ChatGPT, Google Imagen and AI-based tools, ensuring
                        that no external content or copyrighted material was used.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
