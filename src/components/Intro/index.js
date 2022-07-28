import profilePic from "../../profile-image.jpeg";

import "./intro.css";

export const Intro = function () {
  return (
    <div className="intro">
      <img src={profilePic} alt="profile" className="profile-image" />
      <div className="message">
        <h2 className="salutation">
          Hi, I am <span className="name">Phaneendra</span>
        </h2>
        <p className="quick-message">
          Fuelled by passion for building solutions for large scale real life
          problems using software. I have a deep desire to excel and
          continuously improve in my work and life. Learn more about my journey
          below
        </p>
      </div>
    </div>
  );
};
