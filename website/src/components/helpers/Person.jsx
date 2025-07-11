import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faTwitterSquare,
    faXing,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faLink } from "@fortawesome/free-solid-svg-icons";
import "./person.scss";

const Person = ({
                    image,
                    name,
                    boldText,
                    smallText,
                    bio,
                    email,
                    linkedIn,
                    xing,
                    instagram,
                    twitter,
                    link,
                    iconColor = "#000",
                }) => {
    const icons = [
        { href: `mailto:${email}`, icon: faEnvelopeSquare, show: email },
        { href: linkedIn, icon: faLinkedin, show: linkedIn },
        { href: xing, icon: faXing, show: xing },
        { href: instagram, icon: faInstagram, show: instagram },
        { href: twitter, icon: faTwitterSquare, show: twitter },
        { href: link, icon: faLink, show: link },
    ];

    return (
        <div className="container">
            <article className="media contentMarginBottom">
                <figure className="media-left">
                    <div>
                        <img className="imgPerson" src={image} alt="person" />
                    </div>
                </figure>
                <div className="media-content">
                    <div className="container">
                        <div>{name}</div>
                        <div>
                            <strong>{boldText}</strong>
                        </div>
                        <div className="content is-small">{smallText}</div>
                        <div className="container">
                            {bio}
                            <div>
                                {icons.map(
                                    ({ href, icon, show }, i) =>
                                        show && (
                                            <a
                                                key={i}
                                                href={href}
                                                target={href.startsWith("mailto:") ? "_self" : "_blank"}
                                                rel="noopener noreferrer"
                                            >
                                                <FontAwesomeIcon
                                                    icon={icon}
                                                    size="2x"
                                                    style={{ color: iconColor }}
                                                />{" "}
                                            </a>
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Person;
