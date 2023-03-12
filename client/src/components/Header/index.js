import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";

export const Header = function () {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  const links = [
    { name: "Home", to: "/", active: "home" },
    { name: "About Me", to: "/about", active: "about" },
    { name: "Skills", to: "/skills", active: "skills" },
    { name: "Projects", to: "/projects", active: "projects" },
  ];

  return (
    <header>
      <div className="heading">
        {links.map((link, id) => {
          return (
            <Link
              to={link.to}
              className={`links ${link.active === activeTab && "active"}`}
              key={id}
              onClick={() => setActiveTab(link.active)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};
