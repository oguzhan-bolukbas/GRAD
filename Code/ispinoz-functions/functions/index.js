const functions = require("firebase-functions");
const app = require("express")();

const FBAuth = require("./util/FBAuth");

const {signup, login, uploadImage} = require("./handlers/users");
const {getAllQuizResults, saveQuizResult, getQuizResult} = require("./handlers/quizes");

// User routes
app.post("/signup", signup); // Signup route
app.post("/login", login); // Login route
app.post('/user/image', FBAuth, uploadImage);

// Quiz routes
app.get("/quizResults", getAllQuizResults); // To get quiz results
app.post("/quizResult", FBAuth, saveQuizResult); // To save quiz results
app.get('/quizResult/:quizResultId', getQuizResult);

exports.api = functions.https.onRequest(app);