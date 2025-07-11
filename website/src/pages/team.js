import React from "react";
import PageLayout from "../components/helpers/PageLayout";
import Organizers from "../components/team/Organizers";
import ProgramCommittee from "../components/team/ProgramCommittee";

const Team = () => (
    <PageLayout title="RS4SD | Team">
        <Organizers />
        <ProgramCommittee />
    </PageLayout>
);

export default Team;
