import React from "react";
import "./footer.css";
import logo from "../../assets/images/cikm-logo-removebg-preview.png";

const Footer = () => {
    return (
        <footer className="footer has-background-light py-4">
            <div className="" style={{ position: "relative", minHeight: "100px" }}>
                {/* Left-aligned logo */}
                <a
                    href="https://cikm2025.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: "absolute",
                        left: 30,
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}
                >
                    <img src={logo} alt="CIKM 2025 Logo" style={{ height: "120px" }} />
                </a>

                {/* Centered text */}
                <div className="has-text-centered" style={{ maxWidth: "800px", margin: "0 auto", paddingTop:"2rem" }}>
                    <p className="has-text-weight-semibold">
                        <span style={{ color: "#e63946" }}>R</span>
                        <span style={{ color: "#f4a300" }}>S</span>
                        <span style={{ color: "#4CAF50" }}>4</span>
                        <span style={{ color: "#1d3557" }}>SD</span> Workshop @ CIKM 2025, Seoul, South Korea
                    </p>
                    <p className="has-text-success is-italic has-text-weight-medium">© All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
