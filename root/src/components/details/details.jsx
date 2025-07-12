import React from "react";
import "./details.css";
import { HashLink as Link } from 'react-router-hash-link';

const Details = () => {
    return (
        <section id="details" className="section">
            <div className="container content">
                <h3 className="title is-3">Workshop Overview</h3>

                <p>
                    <strong>Recommender Systems (RS)</strong> influence everyday decisions, yet most remain optimized for short-term engagement or commercial gain.
                    <strong> RS4SD</strong> aims to reorient this focus by exploring how RS can promote sustainable development through behavioral change and nudging strategies.
                    Aligned with the{" "}
                    <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
                        UN Sustainable Development Goals (SDGs)
                    </a>
                    , RS4SD will highlight RS applications that encourage responsible consumption, sustainable mobility, healthy eating, and digital well-being.
                    Particularly, we focus on how AI and RS can be designed to promote sustainable behaviors through multi-objective/criteria optimization and ethically aligned interventions.
                    All contributions aligned with the{" "}
                    <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
                        UN SDGs
                    </a>{" "}
                    are welcome.
                </p>

                <p>
                    A central theme is the integration of behavioral science and AI to design interventions that guide users toward more sustainable and healthier choices—without compromising autonomy.
                    RS4SD brings together researchers and practitioners from RS, AI, sustainability, and behavioral science to share models, datasets, frameworks, and real-world use cases.
                    The workshop encourages interdisciplinary collaboration and aims to build a community dedicated to responsible, behavior-aware RS that benefit both individuals and society.
                </p>

                <h4 className="title is-4">Workshop Theme and Topics</h4>
                <ul className="custom-list">
                    <li>Recommender Systems aligned with the UN Sustainable Development Goals (SDGs)</li>
                    <li>Multi-objective RS: balancing user preferences with sustainability, health, and societal impact</li>
                    <li>Behavior-aware RS: integrating behavioral modeling, nudging strategies, and digital interventions</li>
                    <li>Responsible and ethically aligned personalization frameworks</li>
                    <li>
                        Domain-specific RS for Sustainability: health-aware food recommendation, eco-conscious consumption, and sustainable travel/mobility (e.g., green product RS, low-carbon tourism)
                    </li>
                    <li>Generative AI and LLM-powered explainable RS for behavior influence and social good</li>
                    <li>Evaluation metrics beyond accuracy: behavior change, long-term value, environmental and ethical impact</li>
                    <li>Real-world case studies and industrial applications in food, mobility, health, and e-commerce</li>
                </ul>

                <h4 className="title is-4">Workshop Objectives, Goals, and Expected Outcome</h4>

                <p>
                    The goal of <strong>RS4SD</strong> is to foster interdisciplinary collaboration and advance the development of responsible recommender systems
                    that support the Sustainable Development Agenda, public health, and positive behavior change.
                    The workshop emphasizes behavior-aware and ethically aligned AI systems that optimize for multiple objectives beyond user satisfaction alone. It seeks to:
                </p>

                <ul className="custom-list">
                    <li>Bring together researchers and practitioners from RS, behavioral science, sustainability, health, and AI ethics</li>
                    <li>Explore how behavioral nudging and AI-driven interventions can drive meaningful changes in user behavior without compromising autonomy</li>
                    <li>Discuss state-of-the-art techniques in multi-objective RS and user-centric AI</li>
                    <li>
                        Introduce novel metrics and benchmarks for evaluating impact beyond engagement, including behavioral effectiveness and societal value
                    </li>
                    <li>Showcase real-world systems and use cases from both academia and industry</li>
                </ul>

                <p>
                    Expected outcomes include a curated selection of peer-reviewed papers, an expert panel discussion, and the launch of collaborative initiatives.
                    To support long-term impact, we plan to create a mailing list, share workshop highlights, explore a special journal issue,
                    and promote shared benchmarks and datasets to foster ongoing collaboration.
                </p>

                <div className="has-text-centered mt-5">
                    <Link
                        to="/cfp"
                        className="button is-primary is-large is-fullwidth"
                    >
                        <strong>Submit Paper</strong>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Details;
