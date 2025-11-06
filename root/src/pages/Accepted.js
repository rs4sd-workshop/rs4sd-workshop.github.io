import React from "react";
import PageLayout from "../components/helpers/PageLayout";
import submissionsData from "../data/Submissions.json";
import "../components/details/details.css";

const AcceptedPapers = () => {
    // Filter accepted papers
    const acceptedPapers = submissionsData.filter(paper => paper.paperDecision === true);

    // Categorize into Full Papers (score > 1) and Posters (score <= 1)
    const fullPapers = acceptedPapers.filter(paper => paper.paperScore >= 1);
    const posters = acceptedPapers.filter(paper => paper.paperScore < 1);

    return (
        <PageLayout title="RS4SD | Accepted Papers">
            <section id="schedule">
                <h2 className="title is-3">Accepted Contributions</h2>
                <blockquote
                    style={{
                        borderLeft: "5px solid #3667a3",
                        background: "#e6f2ff",
                        color: "#222",
                        margin: "2rem 0",
                        padding: "1.2rem 2rem 1.2rem 1.5rem",
                        fontSize: "1.15rem",
                        fontStyle: "italic",
                        boxShadow: "0 2px 8px rgba(0, 64, 128, 0.05)",
                        borderRadius: "0 8px 8px 0",
                    }}
                >
                    The review decisions have been finalized and announced. Please check the program for details.
                </blockquote>

                <p style={{ marginBottom: "1.5rem" }}>
                    We are delighted to announce the accepted contributions for the workshop.
                </p>
                <ul className="custom-list">
                    {fullPapers.map(paper => (
                        <li key={paper.id}>
                            <strong>{paper.paperTitle}</strong> <br />
                            <em style={{ color: "#666", fontSize: "0.95rem" }}>{paper.authorNames}</em>
                        </li>
                    ))}
                </ul>
                <ul className="custom-list">
                    {posters.map(paper => (
                        <li key={paper.id}>
                            <strong>{paper.paperTitle}</strong> <br />
                            <em style={{ color: "#666", fontSize: "0.95rem" }}>{paper.authorNames}</em>
                        </li>
                    ))}
                </ul>
            </section>
        </PageLayout>
    );
};

export default AcceptedPapers;
