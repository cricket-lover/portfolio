import { Body, Header, Footer } from "./components";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({});

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
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <Header />
      <Body userDetails={userDetails} />
      <Footer />
    </div>
  );
}

export default App;
