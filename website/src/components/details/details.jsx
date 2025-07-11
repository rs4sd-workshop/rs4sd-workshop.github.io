import React from "react";
import Wallpaper from "../../assets/images/headers/wallpaper.png";
import Wallpaper2 from "../../assets/images/headers/cikm-header-4.png";
import "./details.css"
import { Link } from 'react-router-dom'

const Details = () => {
    return (
        <div id={"details"}>
            {/*<div className="container is-fullwidth">*/}
            {/*        <figure>*/}
            {/*            <img src={Wallpaper2} alt="RS4SD @ CIKM" width="100%"/>*/}
            {/*            <figcaption style={{fontSize: "xx-small", textAlign:"right"}}>Photo by <Link to={"https://www.pexels.com/photo/person-s-left-hand-holding-green-leaf-plant-886521/"}> Alena Koval</Link> on Pexel</figcaption>*/}
            {/*        </figure>*/}
                <div className="content">
                    <h3 className="title is-3 bottom-spacing">Workshop Overview</h3>
                    <p>
                        <strong>Recommender Systems (RS)</strong> influence everyday decisions, yet most remain
                        optimized for short-term engagement or commercial gain.
                        <strong>RS4SD</strong> aims to reorient this focus by exploring how RS can promote sustainable
                        development through behavioral change and nudging strategies.
                        Aligned with the <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
                        UN Sustainable Development Goals (SDGs)</a>, RS4SD will highlight RS applications that encourage
                        responsible consumption, sustainable mobility,
                        healthy eating, and digital well-being. Particularly, we will focus on how AI and RS can be
                        designed to promote sustainable behaviors
                        through multi-objective/criteria optimization and ethically aligned interventions.
                        These objectives are part of the <a href="https://sdgs.un.org/goals" target="_blank"
                                                            rel="noopener noreferrer">
                        UN Sustainability Development Goals</a>, so all contributions on RS supporting these goals are
                        welcome at RS4SD.
                    </p>

                    <p>
                        A central theme will be the integration of behavioral science and AI to design interventions
                        that guide users toward more sustainable and healthier choices,
                        without compromising autonomy.
                        Topics include multi-objective recommendation, health-aware RS, eco-friendly product and tourism
                        RS, and novel evaluation metrics that go beyond accuracy
                        to capture societal impact.
                        RS4SD will bring together researchers and practitioners from RS, AI, sustainability, and
                        behavioral science to share models, datasets, frameworks,
                        and real-world use cases. The workshop encourages interdisciplinary/multidisciplinary
                        collaboration and aims to build a community dedicated to responsible,
                        behavior-aware RS that benefit both individuals and society.
                    </p>
                    <h2 className="title is-4">Workshop Theme and Topics</h2>
                    <ul>
                        <li>Recommender Systems aligned with the UN Sustainable Development Goals (SDGs)</li>
                        <li>Multi-objective RS: balancing user preferences with sustainability, health, and societal
                            impact
                        </li>
                        <li>Behavior-aware RS: integrating behavioral modeling, nudging strategies, and digital
                            interventions
                        </li>
                        <li>Responsible and ethically aligned personalization frameworks</li>
                        <li>Domain-specific RS for Sustainability: Health-aware food recommendation, eco-conscious
                            consumption, and sustainable travel/mobility (e.g., green product RS, low-carbon tourism)
                        </li>
                        <li>Generative AI and LLM-powered explainable RS for behavior influence and social good</li>
                        <li>Evaluation metrics beyond accuracy: behavior change, long-term value, environmental and
                            ethical impact
                        </li>
                        <li>Real-world case studies and industrial applications in food, mobility, health, and
                            e-commerce
                        </li>
                    </ul>
                    <h2 className="title is-4">Workshop Objectives, Goals, and Expected Outcome</h2>
                    <p>
                        The goal of <strong>RS4SD</strong> is to foster interdisciplinary collaboration and advance the
                        development of responsible recommender systems
                        that support the Sustainable Development Agenda, public health, and positive behavior change.
                        The workshop emphasizes behavior-aware and
                        ethically aligned AI systems that optimize for multiple objectives beyond user satisfaction
                        alone. The workshop seeks to:
                    </p>
                    <ul>
                        <li>Bring together researchers and practitioners from RS, behavioral science, sustainability,
                            health, and AI ethics
                        </li>
                        <li>Explore how behavioral nudging and AI-driven interventions can drive meaningful changes in
                            user behavior without compromising autonomy
                        </li>
                        <li>Discuss state-of-the-art techniques in multi-objective RS and user-centric AI</li>
                        <li>Introduce novel metrics and benchmarks for evaluating impact beyond engagement, including
                            behavioral effectiveness and societal value
                        </li>
                        <li>Showcase real-world systems and use cases from both academia and industry</li>
                    </ul>
                    <p>
                        Expected outcomes include a curated selection of peer-reviewed papers, an expert panel
                        discussion, and the launch of collaborative initiatives.
                        To support long-term impact, we plan to create a mailing list, share workshop highlights,
                        explore a special journal issue, and promote shared
                        benchmarks and datasets to foster ongoing collaboration.
                    </p>
                </div>

                <div className="has-text-centered">
                    <button type="submit"
                            className="button is-primary is-fullwidth ">

                        <a href="https://forms.gle/FtWJSywh8CYPsEfy5"
                           style={{
                               color: "#FFFFFF",
                               fontSize: "24px"
                           }}><strong>Submit</strong></a>
                    </button>

                </div>

            {/*</div>*/}

        </div>

    )
}
export default Details;