import React from "react";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import SMButton from "../SMButton/SMButton";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Intro/>
            <SMButton/>
        </div>
    );
};

export default Home;