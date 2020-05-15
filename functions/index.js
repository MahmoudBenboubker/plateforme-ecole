const functions = require('firebase-functions');
const app = require('express')();
const { getAllNiveaux, postNiveau } = require('./controllers/niveaux');
const { signUp, login } = require('./controllers/authentification');
const FBAuth = require('./util/middleware');

// ++++++++++++++++++++++++++++++
// Niveaux Route
// ++++++++++++++++++++++++++++++

app.get('/niveaux', getAllNiveaux);
app.post('/niveaux', FBAuth, postNiveau);

// ++++++++++++++++++++++++++++++
// Authentification Route
// ++++++++++++++++++++++++++++++

app.post('/signup', signUp);
app.post('/login', login);

exports.api = functions.region('europe-west1').https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
