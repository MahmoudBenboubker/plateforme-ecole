/* eslint-disable prettier/prettier */
const { db } = require('../util/admin');

exports.getAllNiveaux = (request, response) => {
  db.collection('niveaux')
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
};

exports.postNiveau = (req, res) => {
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
  db.collection('niveaux')
    .add(newNiveau)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
      return console.log('success', doc);
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};
