import React from "react";
import KeynotePic from "../../assets/images/keynote-speaker.jpeg";
import KeynotePic2 from "../../assets/images/negar-keynote.png";

const KeynoteSpeaker = ({ name, title, affiliation, website, keynoteTitle, abstract, imageSrc, altText }) => {
    return (
        <article className="media box">
            {/* Speaker Image */}
            <figure className="media-left">
                <p className="image is-128x128">
                    <img
                        className="is-rounded"
                        src={imageSrc}
                        alt={altText}
                    />
                </p>
            </figure>

            {/* Speaker Info */}
            <div className="media-content">
                <div className="content">
                    <p>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <strong style={{fontSize: "larger"}}>{name}</strong>
                        </a>
                        <br />
                        <em>
                            {affiliation.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < affiliation.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </em>
                    </p>

                    <p className="mt-3">
                        <strong>🔑 Keynote Title:</strong>{" "}
                        {keynoteTitle}
                    </p>

                    {abstract}
                </div>
            </div>
        </article>
    );
};

const Keynote = () => {
    return (
        <section id="keynote">
            <h2 className="title is-4">Keynote Speakers</h2>

            <KeynoteSpeaker
                name="Professor Amir M. Rahmani"
                affiliation="University of California, Irvine
Samueli Chair Professor of Integrative Health
Associate Director of the UCI Institute for Future Health"
                website="https://www.linkedin.com/in/amir-m-rahmani-26555b44/"
                keynoteTitle="Future Health: Responsible Multimodal Health Recommender Systems Powered by GenAI"
                imageSrc={KeynotePic}
                altText="Professor Amir M. Rahmani"
                abstract={
                    <>
                        <p className="mt-3">
                            Amir's research sits at the intersection of{" "}
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
                    </>
                }
            />

            <KeynoteSpeaker
                name="Dr. Negar Arabzadeh"
                affiliation="Postdoctoral Fellow, UC Berkeley"
                website="https://www.negara.me/"
                keynoteTitle="Building and Optimizing Compound AI Systems in Production: Lessons on Efficiency and Reliability"
                imageSrc={KeynotePic2}
                altText="Dr. Negar Arabzadeh"
                abstract={
                    <>
                        <p className="mt-3">
                            Negar Arabzadeh is a Postdoctoral Fellow at UC Berkeley. She completed her Ph.D. at the University of Waterloo under the supervision of Dr. Charles Clarke. Her research lies at the intersection of information retrieval and the evaluation of—and with—large language models (LLMs) in information access systems.
                        </p>

                        <p className="mt-3">
                            AI agents are rapidly transitioning from research prototypes to production-scale systems that operate autonomously across domains such as finance, education, and enterprise automation. These systems are composed of multiple components including retrievers, rerankers, generators, and more, forming a vast design space with many ways to combine and tune modules, each influencing efficiency, accuracy, latency, and cost. This talk frames AI system design as a multi-objective optimization problem: rather than seeking a single "best" configuration, we can adapt systems toward goals such as energy efficiency, reliability, or responsiveness. I will share insights from recent studies of production AI agents, highlighting real-world engineering practices, design trade-offs, and adaptation strategies that balance autonomy with resource constraints. The aim is to explore what it takes to make AI systems both effective and sustainable at scale.
                        </p>
                    </>
                }
            />
        </section>
    );
};

export default Keynote;
