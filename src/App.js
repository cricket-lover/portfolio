import { Body, Header, Footer } from "./components";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetch("/userDetails")
      .then((res) => res.json())
      .then((userDetails) => setUserDetails(userDetails));
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
