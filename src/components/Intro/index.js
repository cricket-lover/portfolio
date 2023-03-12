import "./intro.css";

export const Intro = function ({ name, description, avatar }) {
  return (
    <div className="intro">
      <article>
        <img src={avatar} alt="profile" className="profile-image" />
      </article>
      <aside>
        <div className="message">
          <h2 className="salutation">
            Hi, I am <span>{name}</span>
          </h2>
          <p>{`<${description} />`}</p>
        </div>
      </aside>
    </div>
  );
};
