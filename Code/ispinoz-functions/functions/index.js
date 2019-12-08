const functions = require("firebase-functions");
const app = require("express")();

const { FBAuth } = require("./util/FBAuth");
const { signup, login } = require("./handler/users");
const { getQuizResults, saveQuizResults } = require("./handler/quiz");

// User routes
app.post("/signup", signup); // Signup route
app.post("/login", login); // Login route

// Quiz routes
app.get("/quizResults", getQuizResults); // To get quiz results
app.post("/quizResult", FBAuth, saveQuizResults); // To save quiz results

exports.api = functions.https.onRequest(app);