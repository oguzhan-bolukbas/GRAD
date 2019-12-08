const functions = require("firebase-functions");
const app = require("express")();

const FBAuth = require("./util/FBAuth");

const { signup, login, uploadImage } = require("./handlers/users");
const { getQuizResults, saveQuizResults } = require("./handlers/quizes");

// User routes
app.post("/signup", signup); // Signup route
app.post("/login", login); // Login route
app.post('/user/image', FBAuth, uploadImage);

// Quiz routes
app.get("/quizResults", getQuizResults); // To get quiz results
app.post("/quizResult", FBAuth, saveQuizResults); // To save quiz results

exports.api = functions.https.onRequest(app);