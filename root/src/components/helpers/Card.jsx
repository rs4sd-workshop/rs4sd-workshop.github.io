import React, {useState} from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "./card.css";

const CardComponent = (props) => {
    const SET_DESCRIPTION_CHAR_LENGTH = 100
    const [showFullDescription, setShowFullDescription] = useState(false);


    // Function to toggle between showing truncated and full description
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    let truncatedDescription = "";
    if (props.description) {
        truncatedDescription = props.description.slice(0, SET_DESCRIPTION_CHAR_LENGTH);
    }


    // Function to render table columns dynamically
    const renderTableColumns = () => {
        return props.data.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.locality}</td>
                <td>{item.contact}</td>
            </tr>
        ));
    };

    return (
        <div className={`card column ${props.cardSize} m-2 fixed-height-card`}>
            <div className="is-pulled-right" style={{paddingBottom: "1.5rem"}}>
                {props.activityCategory ? (
                    <span className={`tag ${props.activityColor} is-normal`}>
                        {props.activityCategory}
                    </span>
                ) : null}
            </div>

            {props.images ? (
                <div className="card-image is-centered">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        interval={3000} // 5 seconds
                    >
                        {props.images.map((image, index) => (
                            <figure key={index} className="image is-2by1">
                                <img src={image} alt={`Slide ${index}`}/>
                            </figure>
                        ))}
                    </Carousel>
                </div>
            ) : null}

            <div className="card-content">
                <article className="media">
                    <figure className="media-left">
                        {props.icon && (
                            <p className="image is-64x64">
                                <i className={`${props.icon} fa-3x`}
                                   style={{color: props.color}}/>
                            </p>
                        )}
                    </figure>
                    <div className="media-content">
                        <div className="text title">{props.title}</div>
                        <div className="content" style={{
                            textAlign: "justify",
                            paddingLeft: "1.2rem",
                            paddingRight: "1.2rem"
                        }}>
                        {showFullDescription ? props.description : truncatedDescription}

                        </div>
                        {props.data && props.data.length > 0 && (
                            <div className="table-container">
                                <table className="table is-bordered is-striped is-narrow is-hoverable">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Locality</th>
                                        <th>Contact</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {renderTableColumns()}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {props.description ? ( <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    {showFullDescription ? (
                                        <button
                                            className="button is-light is-centered is-fullwidth is-small"
                                            onClick={toggleDescription}
                                        >
                                            Show Less
                                        </button>
                                    ):(
                                        <button
                                            className="button is-light is-centered is-fullwidth is-small"
                                            onClick={toggleDescription}
                                        >
                                            Show More
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>) :(<div></div>)}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default CardComponent;
