// PageLayout.jsx
import React from "react";
import {Helmet} from "react-helmet";
import Header from "../Header";
import Footer from "./Footer";
import {HeaderData} from "../../data/HeaderData";
import Wallpaper2 from "../../assets/images/headers/cikm-header-3.svg";
import "../../pages/home.scss";
import "./PageLayout.css"

const PageLayout = ({title, children}) => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Header items={HeaderData}/>

            <section className="page-main-content">
                <div className="hero-container">
                    <div className="hero-wrapper">
                        <img src={Wallpaper2} alt="Hero background" className="hero-image"/>
                        <div className="hero-overlay">
                            <h1>
                                <span className="workshop-text">Workshop on</span>
                                <span className="r-text"><span className="r-color">R</span>ecommender <span
                                    className="rs-color">S</span>ystems for</span>
                                <span className="sd-text"><span className="s-color">S</span>ustainable <span
                                    className="d-color">D</span>evelopment (<span className="r-color">R</span><span
                                    className="rs-color">S</span><span className="for-color">4</span>
                                    <span className="s-color">S</span>
                                    <span className="sd-color">D</span>'2025)
                                </span>
                            </h1>
                            <p>November 10–14, Coex, Seoul, Korea (co-located with CIKM'2025)</p>
                        </div>
                    </div>
                </div>

                <div className="page-content-wrapper">
                    {children}
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default PageLayout;