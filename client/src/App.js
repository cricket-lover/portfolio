import { useState, useEffect } from "react";
import { Body, Header, Footer, DisplayError } from "./components";

import "./App.css";

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/userDetails")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(
          "Unable to fetch user details. Something went wrong. Please try again"
        );
      })
      .then((userDetails) => setUserDetails(userDetails))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container">
      <div className="header-body-wrapper">
        <Header />
        {error ? (
          <DisplayError message={error} />
        ) : (
          <Body userDetails={userDetails} />
        )}
      </div>
      <Footer name={userDetails.name} />
    </div>
  );
}

export default App;
