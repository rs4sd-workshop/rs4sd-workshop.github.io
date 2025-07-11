import React from "react";
import Person from "../helpers/Person";
import { teamMembers } from "../../data/TeamData";
import Wallpaper2 from "../../assets/images/headers/cikm-header-4.png";

const YELLOW = "#ffb500";

const Organizers = () => (
    <div id="/team/#organizers" className="content container is-fullwidth">
        <section>
            <div className="container">
                <h3 className="title is-3">Organizers</h3>
                <div className="columns is-multiline">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="card column is-one-third m-0 is-shadowless">
                            <Person
                                boldText={member.name}
                                image={member.image}
                                smallText={member.affiliation}
                                email={member.email}
                                iconColor={YELLOW}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default Organizers;
