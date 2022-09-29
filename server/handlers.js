const fs = require("fs");

const getUserDetails = function () {
  const userDetails = fs.readFileSync("./userDetails.json", "utf-8");
  return JSON.parse(userDetails);
};

module.exports = { getUserDetails };
