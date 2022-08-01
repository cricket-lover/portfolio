import { Link } from "react-router-dom";

import "./header.css";

export const Header = function () {
  return (
    <header>
      <div className="heading">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/about" className="links">
          About Me
        </Link>
        <Link to="/skills" className="links">
          Skills
        </Link>
        <Link to="/projects" className="links">
          Projects
        </Link>
      </div>
    </header>
  );
};
