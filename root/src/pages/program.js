import React from "react";
import PageLayout from "../components/helpers/PageLayout";
import Keynote from "../components/program/Keynote";
import Schedule from "../components/program/Schedule";
import { scheduleDate, scheduleItems } from "../data/ScheduleData";
import { HashLink } from 'react-router-hash-link';

const Program = () => (
    <PageLayout title="RS4SD | CFP">
        <section id="schedule">
                <h2 className="title is-3">Workshop Program</h2>
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
                <HashLink smooth to="/program-2025/#keynote">
                    Keynote Speakers
                </HashLink> and final program announced!
            </blockquote>


            <Schedule date={scheduleDate} scheduleItems={scheduleItems} />
        </section>
        <Keynote/>
    </PageLayout>
);

export default Program;
