import React from "react";
import Person from "../helpers/Person";
import { teamMembers } from "../../data/TeamData";

const YELLOW = "#ffb500";

const Organizers = () => (
         <section id="/team/#organizers">
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
        </section>
);

export default Organizers;
