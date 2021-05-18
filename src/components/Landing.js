import React from "react";
import "./Landing.css";
import logo from "./flame-remote-working.png";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__left">
                <h1 className="landing__heading">
                    <span style={{ color: "#F04E23", display: "block" }}>
                        Collect{" "}
                    </span>{" "}
                    <span style={{ color: "#FFB400" }}>feedback </span>
                    <span style={{ color: "#192B4A" }}>from </span>
                    <span style={{ color: "#00AEE0", display: "block" }}>
                        your users
                    </span>
                </h1>
                <a href="/auth/google">
                    <button className="landing__button">
                        Start Now <span>&#8594;</span>
                    </button>
                </a>
            </div>
            <div className="landing__right">
                <img
                    src={logo}
                    alt="landing page logo"
                    className="landing__logo"
                />
            </div>
        </div>
    );
};

export default Landing;
