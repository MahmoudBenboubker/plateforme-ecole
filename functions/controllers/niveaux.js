/* eslint-disable prettier/prettier */
const { db } = require('../util/admin');

exports.getAllNiveaux = (request, response) => {
  db.collection('niveaux')
    .get()
    .then(data => {
      let niveaux = [];
      console.log('data', data);
      data.forEach(doc => {
        console.log('id', doc.id);
        niveaux.push(doc.data());
      });
      return response.json(niveaux);
    })
    .catch(err => {
      console.error(err);
      return response.json(err);
    });
};
exports.getAllNiveauxWithSubNiveaux = (request, response) => {
  const niveaux = [];
  const subNiveaux = [];
  db.collection('niveaux')
    .get()
    .then(data => {
      data.forEach(doc => {
        niveaux.push(doc.data());
      });
      return niveaux;
    })
    .then(
      db
        .collection('subNiveaux')
        .get()
        .then(data => {
          data.forEach(doc => {
            subNiveaux.push(doc.data());
          });
          niveaux.forEach(niveau => {
            // console.log('niveau', niveau.id);
            niveau.subNiveaux = [];
            subNiveaux.forEach(subNiveau => {
              // console.log('subNiveau', subNiveau.niveauId);
              if (niveau.id === subNiveau.niveauId) {
                // console.log('subNiveau', subNiveau);
                niveau.subNiveaux.push(subNiveau);
              }
            });
          });
          return niveaux;
        })
        .then(resp => response.json(resp)),
    )
    .catch(err => {
      return response.json(err);
    });
};

exports.getNiveauById = (req, response) => {
  const idNiveau = req.params.id;
  db.collection('niveaux')
    .doc(idNiveau)
    .get()
    .then(data => {
      if (!data.exists) {
        return response.status(404).json({ message: "Resource doesn't exist" });
      } else {
        return response.json(data.data());
      }
    })
    .catch(err => {
      console.error(err);
      return response.json(err);
    });
};
exports.deleteNiveauById = (req, response) => {
  const idNiveau = req.params.id;
  db.collection('niveaux')
    .doc(idNiveau)
    .delete()
    .then(data => {
      return response.json({ message: 'Has been deleted with success' });
    })
    .catch(err => {
      console.error(err);
      return response.json(err);
    });
};

exports.postNiveau = (req, res) => {
  const body = req.body;
  const newNiveau = {
    id: body.id,
    name: body.name,
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

exports.putNiveau = (req, res) => {
  const body = req.body;
  const idNiveau = body.niveauId;
  const toUpdate = req.body.toUpdate;

  db.doc(`/niveaux/${idNiveau}`)
    .update(toUpdate)
    .then(doc => {
      console.log(doc);
      return res.json({ message: `document ${doc.id} modified successfully` });
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};
