import "./skills.css";

export const Skills = function ({ skills = [] }) {
  return (
    <div className="skills-container">
      <div className="skills-label">SKILLS</div>
      <div className="skills">
        {skills.map((skill, id) => {
          return (
            <span key={id} className="skill">
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};
