import React from "react";
import {HashLink} from 'react-router-hash-link';
import logo from "../assets/images/logo.png"

const Header = (props) => {

    function handleBurgerClick(event) {
        event.target.classList.toggle('is-active');
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }

    return (
        <div>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item " href="/">
                        <img src={logo} alt="RS4SD logo" height="150"/>
                    </a>

                    <a role="button"
                       className="navbar-burger burger"
                       onClick={handleBurgerClick}
                       href={"/#"} // add this for accessibility!
                       aria-label="menu"
                       aria-expanded="false"
                       data-target="navbarMenu">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div id="navbar-menu" className="navbar-menu" onClick={handleBurgerClick}>
                    <div className="navbar-start">
                        {props.items.map((item) => {
                            if (item.dropDown)
                                return (
                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <a className="navbar-link">{item.text}</a>

                                        <div className={"navbar-dropdown"}>
                                            {item.dropDown.map((i, j) => (
                                                <>
                                                    <HashLink
                                                        className="navbar-item"
                                                        to={i.url}
                                                        smooth="true"
                                                    >
                                                        {i.text}
                                                    </HashLink>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                );
                            else
                                return (
                                    <HashLink className="navbar-item" to={item.url} smooth="true">
                                        {item.text}
                                    </HashLink>
                                );
                        })}

                    </div>
                </div>
            </nav>

        </div>
    )


}
export default Header;