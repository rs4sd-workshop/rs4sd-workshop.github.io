import React from "react";
import KeynotePic from "../../assets/images/keynote-speaker.jpeg"; // Importing the keynote speaker's image
const Keynote = () => {
    return (
        <section id="keynote">
                <h2 className="title is-4">Keynote Speaker</h2>

                <article className="media box">
                    {/* Speaker Image */}
                    <figure className="media-left">
                        <p className="image is-128x128">
                            <img
                                className="is-rounded"
                                src={KeynotePic}
                                alt="Professor Amir M. Rahmani"
                            />
                        </p>
                    </figure>

                    {/* Speaker Info */}
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <a href={"https://www.linkedin.com/in/amir-m-rahmani-26555b44/"}>
                                    <strong style={{fontSize: "larger"}}>Professor Amir M. Rahmani</strong>
                                </a>
                                <br />
                                <em>
                                    University of California, Irvine <br />
                                    Samueli Chair Professor of Integrative Health <br />
                                    Associate Director of the UCI Institute for Future Health
                                </em>
                            </p>

                            <p className="mt-3">
                                <strong>🔑 Keynote Title:</strong>{" "}
                                Future Health: Responsible Multimodal Health Recommender Systems
                                Powered by GenAI
                            </p>

                            <p className="mt-3">
                                Amir’s research sits at the intersection of{" "}
                                <em>
                                    AI, health informatics, personalization, wearable and mobile
                                    computing, and responsible AI
                                </em>
                                . In his keynote, he will explore how responsible health
                                recommender systems, powered by multimodal analytics and
                                generative AI, can deliver personalized, preventive, and
                                context-aware guidance, nudging healthier behaviors while
                                respecting autonomy, privacy, and sustainability.
                            </p>

                            <p className="mt-3">
                                He will also share insights from platforms like{" "}
                                <strong>OpenCHA</strong> (open-source agentic conversational
                                health agents) and <strong>Centralive</strong> (scalable digital
                                health infrastructure), offering a vision for the future of
                                personalized and equitable healthcare.
                            </p>
                        </div>
                    </div>
                </article>
        </section>
    );
};

export default Keynote;
