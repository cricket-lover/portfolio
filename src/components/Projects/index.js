import "./projects.css";

export const Projects = function ({ projects }) {
  return (
    <div className="projects">
      {projects.map((project, id) => {
        return (
          <div key={id} className="project">
            {project.name}
          </div>
        );
      })}
    </div>
  );
};
