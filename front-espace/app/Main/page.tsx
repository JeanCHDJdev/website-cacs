import Slideshow from "../tools/Slideshow";import React, { useState } from "react";
import TeamPage from "./TeamPage";

const Teams = [
    <TeamPage team_text="Pôle Espace" team_bg="/home_page/main_img_diapo/phenics_decollage.jpg" patch=""/>
];

const Page: React.FC = () => {
    return (
        <div style={{width:'100vw', height:'100vh'}}>
            <Slideshow
                content={Teams}
                timer={5000}
                slideshow_styles={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};

export default Page;
