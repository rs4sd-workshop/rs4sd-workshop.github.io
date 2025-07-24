import React from "react";
import PageLayout from "../components/helpers/PageLayout";


const Cfp = () => (
    <PageLayout title="RS4SD | CFP">
        <section id="schedule" className="section">
            <div className="container">
                <h2 className="title is-3">Key Dates</h2>
                <p style ={{fontWeight:"bold", fontSize: "x-large", paddingBottom: "1rem"}}
                ><a href={"https://www.timeanddate.com/time/zones/aoe"}>All deadlines are at 11:59pm in the Anywhere on Earth (AoE) time zone.</a></p>
                <ul>
                    <li style={{marginBottom: "0.5rem"}}><strong>Paper Submission Deadline:</strong> August 31, 2025</li>
                    <li style={{marginBottom: "0.5rem"}}><strong>Notification to Authors:</strong> September 30, 2025</li>
                    <li style={{marginBottom: "0.5rem"}}><strong>Camera-ready Due:</strong> October 5, 2025</li>
                </ul>
            </div>
        </section>
    </PageLayout>
);

export default Cfp;
