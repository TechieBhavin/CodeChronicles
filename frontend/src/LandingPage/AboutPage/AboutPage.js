import React from "react";
// import AboutCC from "./AboutCC.js";
import VisionCC from "./VisionCC.js";
import MissionCC from "./MissionCC.js";
import hero from "./hero.js";

const AboutPage = () => {
  return (
    <>
       <div>{hero()}</div>
      {/* <AboutCC /> */}
      <VisionCC />
      <MissionCC />
      
    </>
  );
};
export default AboutPage;
