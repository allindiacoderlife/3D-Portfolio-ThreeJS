import React from "react";
import { Link } from "react-router-dom";
import {arrow} from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"/>
      </Link>
    </div>
  );
};

const readerContent = {
  1: (
    <h1
      className="sm:text-xg sm:leading-snug text-center 
    neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I am <span className="font-semibold">Chirag</span> 😎
      <br />A Software Engineer From India
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a Full Stack Developer with a passion for building web applications."
      link="/Portfolio/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led Multiple project to success over the year."
      link="/Portfolio/projects"
      btnText="View Projects"
    />
  ),
  4:(
    <InfoBox
      text="I am currently looking for new opportunities."
      link="/Portfolio/contant"
      btnText="Contact Me"
    />
  ),
};

const HomeInfo = ({ CurrentStage }) => {
  return readerContent[CurrentStage] || null;
};

export default HomeInfo;
