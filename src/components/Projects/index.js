import "./projects.css";

export const Projects = function ({ projects }) {
  return (
    <div className="projects">
      {projects.map((project, id) => {
        return (
          <div key={id} className="project">
            <div className="project-thumbnail">{project.name}</div>
            <div className="project-details">
              <div className="tech-stack">
                {project.technologies.map((technology) => {
                  return <p className="tech">{technology}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
