const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const app = express();

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// GET Niveaux (Maternelle, Primaire, Collège)

app.get('/niveaux', (request, response) => {
  admin
    .firestore()
    .collection('niveaux')
    .get()
    .then(data => {
      let niveaux = [];
      data.forEach(doc => {
        niveaux.push(doc.data());
      });
      return response.json(niveaux);
    })
    .catch(err => {
      console.error(err);
      return response.json(err);
    });
});

// POST Niveau (Create new document)

app.post('/niveaux', (req, res) => {
  const body = req.body;
  console.log(body);
  const newNiveau = {
    id: body.id,
    name: body.name,
    // subNiveau: [
    //   {
    //     id: body.subNiveau.id,
    //     name: body.subNiveau.name,
    //   },
    // ],
  };
  admin
    .firestore()
    .collection('niveaux')
    .add(newNiveau)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
      return console.log('success', doc);
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
});

// HTTPS://baseurl.com/api/

exports.api = functions.https.regions('europe-west1').onRequest(app);
