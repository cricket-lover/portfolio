import { Intro, Projects, Skills, Terminal } from "..";

import "./body.css";

const skills = [
  "Javascript",
  "ReactJS",
  "NodeJS",
  "Problem Solving",
  "Javascript",
  "ReactJS",
  "NodeJS",
  "Problem Solving",
  "Java",
];

const projects = [
  {
    name: "Filmy Review",
    tech: ["Javascript", "ReactJs", "NodeJs", "Redis"],
  },
  {
    name: "Filmy Review",
    tech: ["Javascript", "ReactJs", "NodeJs", "Redis"],
  },
  {
    name: "Filmy Review",
    tech: ["Javascript", "ReactJs", "NodeJs", "Redis"],
  },
];

export const Body = function () {
  return (
    <div className="content">
      <Intro />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Terminal />
    </div>
  );
};
