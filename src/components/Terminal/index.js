import "./terminal.css";

const Circle = function ({ color }) {
  return <div className="circle" style={{ backgroundColor: color }}></div>;
};

export const Terminal = function ({ description, skills = [] }) {
  let pwd = `~/apurva`;

  return (
    <div className="terminal">
      <div className="menu-bar">
        <Circle color="#ff6057" />
        <Circle color="#ffbd2d" />
        <Circle color="#25c93f" />
      </div>
      <div className="title-bar">
        <div className="command">
          <span className="pwd">{pwd} $ </span>
          <span>cat aboutapurva</span>
          <p>{description}</p>
        </div>
        <div className="command">
          <span className="pwd">{pwd} $ </span>
          <span>cd skills</span>
        </div>
        <br />
        <div className="command">
          <span className="pwd">{pwd}/skills $ </span>
          <span>ls</span>
          <div className="terminal-skills">
            {skills.map((skill, id) => {
              return (
                <li key={id} className="skill-item">
                  ・{skill}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
