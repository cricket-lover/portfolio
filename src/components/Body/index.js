import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/skills" element={<Skills skills={skills} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/about" element={<Terminal />} />
      </Routes>
    </div>
  );
};
