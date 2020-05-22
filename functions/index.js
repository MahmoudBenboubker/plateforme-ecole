const functions = require('firebase-functions');
const cors = require('cors');
const app = require('express')();
app.use(cors());
const {
  getAllNiveaux,
  getAllNiveauxWithSubNiveaux,
  getNiveauById,
  postNiveau,
  deleteNiveauById,
  putNiveau,
} = require('./controllers/niveaux');
const {
  getSubNiveauxByNiveau,
  postSubNiveauxByNiveau,
  putSubNiveauxByNiveau,
} = require('./controllers/subniveaux');
const {
  getClasseBySubNiveau,
  postClasseBySubNiveau,
  putClasseBySubNiveau,
} = require('./controllers/classes');
const {
  postResourceByClasse,
  postResourceStoreByClasse,
} = require('./controllers/resources');
const { signUp, login } = require('./controllers/authentification');
const FBAuth = require('./util/middleware');

// ++++++++++++++++++++++++++++++
// Niveaux Route
// ++++++++++++++++++++++++++++++

app.get('/niveaux', getAllNiveaux);
app.get('/niveauxWithSubniveaux', getAllNiveauxWithSubNiveaux);
app.get('/niveau/:id', getNiveauById);
app.delete('/niveau/:id', FBAuth, deleteNiveauById);
app.post('/niveaux', FBAuth, postNiveau);
app.put('/niveau', FBAuth, putNiveau);

// ++++++++++++++++++++++++++++++
// SubNiveaux Route
// ++++++++++++++++++++++++++++++

app.get('/subNiveaux/:id', getSubNiveauxByNiveau);
app.post('/subNiveau/:id', FBAuth, postSubNiveauxByNiveau);
app.put('/subNiveau/:id', FBAuth, putSubNiveauxByNiveau);

// ++++++++++++++++++++++++++++++
// Classe Route
// ++++++++++++++++++++++++++++++

app.get('/classes/:id', getClasseBySubNiveau);
app.post('/classes/:id', FBAuth, postClasseBySubNiveau);
app.put('/classes/:id', FBAuth, putClasseBySubNiveau);

// ++++++++++++++++++++++++++++++
// Resource Route
// ++++++++++++++++++++++++++++++

// app.get('/classes/:id', getClasseBySubNiveau);
app.post('/resource/:id', FBAuth, postResourceByClasse);
app.post('/resource/store/:id', FBAuth, postResourceStoreByClasse);
// app.put('/classes/:id', FBAuth, putClasseBySubNiveau);

// ++++++++++++++++++++++++++++++
// Authentification Route
// ++++++++++++++++++++++++++++++

app.post('/signup', signUp);
app.post('/login', login);

exports.api = functions.region('europe-west1').https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
