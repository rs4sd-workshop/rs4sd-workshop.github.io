import React, { useState } from "react";
import CardComponent from "./Card";

const SectionComponent = (props) => {
    const [itemsToShow, setItemsToShow] = useState(props.count);

    const showMore = () => {
        setItemsToShow(props.data.length);
    };

    const showLess = () => {
        setItemsToShow(props.count);
    };
    return (
        <div className={"columns is-multiline"}>
            {props.data.slice(0, itemsToShow).map((item, index) => (
                <div className={`${props.columnSize}`}>
                    <CardComponent
                        cardSize={item.cardSize}
                        images={item.images}
                        title={item.title}
                        activityCategory = {item.activityCategory}
                        activityColor = {item.activityColor}
                        description={item.description}
                        icon={item.icon}
                        data={item.data}
                    />
                </div>

            ))}

            {itemsToShow === props.count ? (
                <button
                    className="button  is-primary is-light is-centered is-fullwidth show-more-button is-small"
                    style={{marginTop:"1.5rem", marginBottom:"5.5rem"}}
                    onClick={showMore}
                    type="submit"
                >
                    Show all {props.data.length} {props.sectionTitle}
                </button>
            ) : (
                <button
                    className="button is-light is-centered is-fullwidth is-small"
                    onClick={showLess}
                    style={{marginTop:"1.5rem", marginBottom:"5.5rem"}}
                >
                    Show Less
                </button>
            )}
        </div>
    );
};

export default SectionComponent;