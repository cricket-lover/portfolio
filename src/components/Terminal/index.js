import "./terminal.css";

const Circle = function ({ color }) {
  return <div className="circle" style={{ backgroundColor: color }}></div>;
};

export const Terminal = function () {
  let pwd = `~/phani`;

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
          <span>cat aboutphani</span>
          <p>
            Fuelled by passion for building solutions for large scale real life
            problems using software. I have a deep desire to excel and
            continuously improve in my work and life. Learn more about my
            journey below
          </p>
        </div>
        <div className="command">
          <span className="pwd">{pwd}/skills $ </span>
          <span>ls</span>
          <div className="skills">
            {[
              "Javascript",
              "Problem-Solving",
              "ReactJS",
              "NodeJS",
              "NodeJS",
              "Problem-Solving",
              "ReactJS",
              "NodeJS",
            ].map((skill, id) => {
              return (
                <li key={id} className="skill-item">
                  {skill}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
