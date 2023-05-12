const express = require("express");
const { getUserDetails } = require("./handlers");
const app = express();
const path = require("path");

// serve up production assets
app.use(express.static(path.join(__dirname, "../client/build")));

const PORT = process.env.PORT || 8000;

app.use("/images", express.static("public/images"));

app.get("/", (req, res) => res.send("Server is running"));
app.get("/userDetails", (req, res) => {
  const userDetails = getUserDetails();
  return res.json(userDetails);
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, console.log("Listening at port", PORT));
