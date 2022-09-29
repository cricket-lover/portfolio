import "./intro.css";

export const Intro = function ({ name, description, avatar }) {
  return (
    <div className="intro">
      <img src={avatar} alt="profile" className="profile-image" />
      <div className="message">
        <h2 className="salutation">
          Hi, I am <span className="name">{name}</span>
        </h2>
        <p className="quick-message">{description}</p>
      </div>
    </div>
  );
};
