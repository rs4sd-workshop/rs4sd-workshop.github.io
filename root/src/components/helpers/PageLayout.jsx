// src/components/layout/PageLayout.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../helpers/Footer";
import { HeaderData } from "../../data/HeaderData";
import Wallpaper2 from "../../assets/images/headers/cikm-header-4.png";
import { Link } from "react-router-dom";
import "../../pages/home.scss";

const PageLayout = ({ title, children }) => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Header items={HeaderData} />

            <section className="Home main-content">
                <div className="container welcome-container welcome-container--ftl">
                    <div className="container is-fullwidth">
                        <figure>
                            <img src={Wallpaper2} alt="RS4SD @ CIKM" width="100%" />
                            <figcaption style={{ fontSize: "xx-small", textAlign: "right" }}>
                                Photo by{" "}
                                <Link
                                    to={
                                        "https://www.pexels.com/photo/person-s-left-hand-holding-green-leaf-plant-886521/"
                                    }
                                >
                                    Alena Koval
                                </Link>{" "}
                                on Pexel
                            </figcaption>
                        </figure>
                    </div>

                    {children}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PageLayout;
