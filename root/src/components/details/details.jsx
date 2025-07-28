import React from "react";
import "./details.css";
import {HashLink as Link} from 'react-router-hash-link';

const Details = () => {
    return (
        <section id="details" >
                <h3 className="title is-3">Workshop Overview</h3>

                <p>
                    <strong>Recommender Systems (RS)</strong> influence everyday decisions, yet most remain optimized
                    for short-term engagement or commercial gain.
                    <strong> RS4SD: Workshop on Recommender Systems for Sustainable Development</strong> using responsible nudging aims to reorient this focus by exploring how RS can promote sustainable
                    development through behavioral change and nudging strategies.
                    Aligned with the{" "}
                    <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
                        UN Sustainable Development Goals (SDGs)
                    </a>
                    , RS4SD will highlight RS applications that encourage responsible consumption, sustainable mobility,
                    healthy eating, and digital well-being.
                    Particularly, we focus on how AI and RS can be designed to promote sustainable behaviors through
                    multi-objective/criteria optimization and ethically aligned interventions.
                    All contributions aligned with the{" "}
                    <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
                        UN SDGs
                    </a>{" "}
                    are welcome.
                </p>

                <p style={{ marginBottom: "2rem" }}>
                    A central theme is the integration of behavioral science and AI to design interventions that guide
                    users toward more sustainable and healthier choices—without compromising autonomy.
                    RS4SD brings together researchers and practitioners from RS, AI, sustainability, and behavioral
                    science to share models, datasets, frameworks, and real-world use cases.
                    The workshop encourages interdisciplinary collaboration and aims to build a community dedicated to
                    responsible, behavior-aware RS that benefit both individuals and society.
                </p>
                <h4 className="title is-4" >Workshop Objectives, Goals, and Expected Outcome</h4>

                <p>
                    The goal of <strong>RS4SD</strong> is to foster interdisciplinary collaboration and advance the
                    development of responsible recommender systems
                    that support the Sustainable Development Agenda, public health, and positive behavior change.
                    The workshop emphasizes behavior-aware and ethically aligned AI systems that optimize for multiple
                    objectives beyond user satisfaction alone. It seeks to:
                </p>

                <ul className="custom-list">
                    <li>Bring together researchers and practitioners from RS, behavioral science, sustainability,
                        health, and AI ethics
                    </li>
                    <li>Explore how behavioral nudging and AI-driven interventions can drive meaningful changes in user
                        behavior without compromising autonomy
                    </li>
                    <li>Discuss state-of-the-art techniques in multi-objective RS and user-centric AI</li>
                    <li>
                        Introduce novel metrics and benchmarks for evaluating impact beyond engagement, including
                        behavioral effectiveness and societal value
                    </li>
                    <li>Showcase real-world systems and use cases from both academia and industry</li>
                </ul>

                <p>
                    Expected outcomes include a curated selection of peer-reviewed papers, an expert panel discussion,
                    and the launch of collaborative initiatives.
                    To support long-term impact, we plan to create a mailing list, share workshop highlights, explore a
                    special journal issue,
                    and promote shared benchmarks and datasets to foster ongoing collaboration.
                </p>
            <blockquote
                style={{
                    borderLeft: "5px solid #3667a3",
                    background: "#ffefcaff",
                    color: "#222",
                    margin: "2rem 0",
                    padding: "1.2rem 2rem 1.2rem 1.5rem",
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                    boxShadow: "0 2px 8px rgba(0, 64, 128, 0.05)",
                    borderRadius: "0 8px 8px 0",
                }}
            >
                Check out our <a href="/cfp" style={{ textDecoration: "None", color: "#3667a3" }}>CFP</a> for more details.
            </blockquote>


        </section>
    );
};

export default Details;
