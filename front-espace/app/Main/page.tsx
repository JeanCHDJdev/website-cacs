import Slideshow from "../tools/Slideshow";import React, { useState } from "react";
import TeamPage from "./TeamPage";

const Teams = [
    <a key={'x'}>X</a>,
    <a key={'y'}>Y</a>,
];

const Page: React.FC = () => {
    return (
        <div style={{width:'100%', height:'70rem'}}>
            <Slideshow
                content={Teams}
                timer={5000}
                slideshow_styles={{ width: "100%", height: "100%" }}
                showAdjacentSlides={true}
            />
        </div>
    );
};

export default Page;
