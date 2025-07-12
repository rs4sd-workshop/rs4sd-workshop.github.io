import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "./Footer";
import { HeaderData } from "../../data/HeaderData";
import Wallpaper2 from "../../assets/images/headers/cikm-header-4.png";
import { Link } from "react-router-dom";
import "../../pages/home.scss";
import "./PageLayout.css"

const PageLayout = ({ title, children }) => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Header items={HeaderData} />

            <section className="page-main-content">
                <div className="hero-figure-wrapper">
                    <figure>
                        <img src={Wallpaper2} alt="RS4SD @ CIKM" className="hero-image" />
                        <figcaption className="hero-caption">
                            Photo by{" "}
                            <Link to="https://www.pexels.com/photo/person-s-left-hand-holding-green-leaf-plant-886521/">
                                Alena Koval
                            </Link>{" "}
                            on Pexel
                        </figcaption>
                    </figure>
                </div>

                <div className="page-content-wrapper">{children}</div>
            </section>

            <Footer />
        </div>
    );
};

export default PageLayout;
