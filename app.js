var profile = require("./profile.js");
var username = "kevinfitzhenry";
// var users = ["chalkers", "kevinfitzhenry"];

//Allows you to enter usernames in the terminal
var users = process.argv.slice(2);

// profile.get(username);

users.forEach(profile.get);
