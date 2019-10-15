const functions = require("firebase-functions");
const app = require("express")();

const { signup, login } = require("./handler/users");

// Signup route
app.post("/signup", signup);

// Login route
app.post("/login", login);

exports.api = functions.https.onRequest(app);
