import React from "react";
import PageLayout from "../components/helpers/PageLayout";

const Cfp = () => {
    const linkStyle = {
        color: "#3667a3",
        fontWeight: "500",
    };

    return (
        <PageLayout title="RS4SD | CFP">

            <section id="guidelines">
                <h2 className="title is-3" style={{ marginTop: "2.5rem" }}>
                    Submission Guidelines
                </h2>

                <p>
                    All submissions must be in English and should be uploaded in PDF format via the{" "}
                    <a
                        href="https://easychair.org/my/conference?conf=rs4sd"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        EasyChair submission system
                    </a>
                    . Please select the track titled{" "}
                    <strong>
                        “RS4SD – 1st Workshop on Recommender Systems for Sustainable Development using Responsible
                        Nudging.”
                    </strong>
                </p>


                <p style={{ marginTop: "0.5rem" }}>
                    This is a <strong>non-archival</strong> workshop. However, we encourage authors to make their work
                    publicly accessible via{" "}
                    <a
                        href="https://arxiv.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        arXiv.org
                    </a>
                    .  Submissions must adhere to the <strong>ACM double-column format</strong> in accordance with the official{" "}
                    <a
                        href="https://www.acm.org/publications/authors/submissions"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        ACM Publication Workflow
                    </a>
                    , but authors are asked to include the LaTeX command{" "}
                    <code>{`\\setcopyright{none}`}</code> to indicate that the work is not under ACM copyright.
                </p>

                <p style={{ marginTop: "0.5rem" }}>
                    The review process is <strong>single-blind</strong>; the authors’ names do not need to be anonymized.
                   Presentations will be held in an oral or a poster style.
                </p>

                <h4 className="title is-4" style={{paddingTop:"2rem"}}>Workshop Theme and Topics</h4>
                <ul className="custom-list">
                    <li>Recommender Systems aligned with the UN Sustainable Development Goals (SDGs)</li>
                    <li>Multi-objective RS: balancing user preferences with sustainability, health, and societal
                        impact
                    </li>
                    <li>Behavior-aware RS: integrating behavioral modeling, nudging strategies, and digital
                        interventions
                    </li>
                    <li>Responsible and ethically aligned personalization frameworks</li>
                    <li>
                        Domain-specific RS for Sustainability: health-aware food recommendation, eco-conscious
                        consumption, and sustainable travel/mobility (e.g., green product RS, low-carbon tourism)
                    </li>
                    <li>Generative AI and LLM-powered explainable RS for behavior influence and social good</li>
                    <li>Evaluation metrics beyond accuracy: behavior change, long-term value, environmental and ethical
                        impact
                    </li>
                    <li>Real-world case studies and industrial applications in food, mobility, health, and e-commerce
                    </li>
                    <li>
                        Energy-efficient RS models: developing recommendation algorithms that minimize computational cost and energy consumption to reduce the carbon footprint of AI systems and support environmental sustainability.

                    </li>
                </ul>


                <h3 className="title is-4" style={{ marginTop: "2rem" }}>
                    Submission Types
                </h3>
                <p style={{ marginBottom: "0.5rem" }}>We welcome the following types of submissions:</p>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Full Research Papers</strong> (up to 9 pages, excluding references): Present mature,
                        original research with validated results.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Short Papers / Work-in-Progress</strong> (up to 6 pages, excluding references): Present
                        early-stage ideas, prototypes, or findings.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Vision / Position Papers</strong> (4–6 pages, excluding references): Present provocative
                        ideas, future directions, or thought leadership.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Demo Papers</strong> (up to 4 pages, excluding references): Showcase system prototypes,
                        software tools, or datasets.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Extended Abstracts</strong> (up to 2 pages, excluding references): Include experience
                        sharing, novel concepts, or preliminary results. Prior or concurrently submitted work is also
                        accepted under this category (non-archival).
                    </li>
                </ul>
            </section>
            <section id="dates">
                <h3 className="title is-4" style={{marginTop: "2rem"}}>Key Dates</h3>
                <p style={{ fontWeight: "bold", fontSize: "x-large", paddingBottom: "1rem" }}>
                    <a href="https://www.timeanddate.com/time/zones/aoe" style={linkStyle}>
                        All deadlines are at 11:59pm in the Anywhere on Earth (AoE) time zone.
                    </a>
                </p>
                <ul>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Paper Submission Deadline:</strong> August 31, 2025
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Notification to Authors:</strong> September 30, 2025
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Camera-ready Due:</strong> October 5, 2025
                    </li>
                </ul>
            </section>

        </PageLayout>
    );
};

export default Cfp;
