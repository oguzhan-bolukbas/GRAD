const functions = require("firebase-functions");
const app = require("express")();

const { signup, login } = require("./handler/users");

app.post("/signup", signup); // Signup route
app.post("/login", login); // Login route

exports.api = functions.https.onRequest(app);
