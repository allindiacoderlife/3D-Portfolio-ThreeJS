import React from "react";
import { skills , experiences} from "../contents";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello , I'm{" "}
        <span
          className="blue-gradient_text font-semibold
         drop-shadow"
        >
          Chirag
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        {/* About */}
        <p>
          How you go about creating your portfolio website will depend on your
          budget, skill-level, what you want on the site, and how much time
          you’re willing to invest. Luckily, you have plenty of options. If
          you’re looking to truly impress future employers, one of the best ways
          to demonstrate your technical ability is to set up a server and create
          a website from scratch.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skill</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front flex justify-center items-center rounded-xl">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            {/* work experience */}
            How you go about creating your portfolio website will depend on your
            budget, skill-level, what you want on the site, and how much time
            you’re willing to invest. Luckily, you have plenty of options. If
            you’re looking to truly impress future employers, one of the best
            ways to demonstrate your technical ability is to set up a server and
            create a website from scratch.
          </p>
        </div>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experiences , index) => {
            return (
              <VerticalTimelineElement
                key={experiences.company_name}
                date={experiences.date}
                icon={<div className=" flex justify-center items-center w-full h-full">
                  <img 
                  src={experiences.icon}
                  alt={experiences.company_name}
                  className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
                iconStyle={{ background: experiences.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle:'solid',
                  borderBottomColor: experiences.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experiences.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base"
                   style={{margin:0}} >
                    {experiences.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experiences.points.map((point, index) => {
                    return (
                      <li 
                        key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm">

                        {point}
                      </li>
                    )
                  })}
                </ul>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200"/>
      <CTA />
    </section>
  );
};

export default About;
