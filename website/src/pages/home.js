import React from "react";
import { Helmet } from 'react-helmet';
import "../pages/home.scss";
import Details from "../components/details/details";
import Header from "../components/Header";
import Footer from "../components/helpers/Footer";
import { HeaderData } from "../data/HeaderData";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RS4SD | Home</title>
            </Helmet>

            <div>
                <Header items={HeaderData} />
                <section className="Home">
                    <div className="container welcome-container welcome-container--ftl">
                      <Details />
                    </div>
                    {/*<Team/>*/}
                </section>
                <Footer/>
            </div>
        </div>

    );

}
export default Home;