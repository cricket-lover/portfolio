import { Routes, Route } from "react-router-dom";
import { Intro, Projects, Skills, Terminal } from "..";

import "./body.css";

export const Body = function ({ userDetails }) {
  return (
    <div className="content">
      <Routes>
        <Route
          path="/"
          element={
            <Intro
              name={userDetails.name}
              description={userDetails.description}
              avatar={userDetails.avatar}
            />
          }
        />
        <Route
          path="/skills"
          element={<Skills skills={userDetails.skills} />}
        />
        <Route
          path="/projects"
          element={<Projects projects={userDetails.projects} />}
        />
        <Route
          path="/about"
          element={
            <Terminal
              skills={userDetails.skills}
              description={userDetails.description}
            />
          }
        />
      </Routes>
    </div>
  );
};
