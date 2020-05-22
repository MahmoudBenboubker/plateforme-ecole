/* eslint-disable prettier/prettier */
const { db, admin } = require('../util/admin');

exports.getSubNiveauxByNiveau = (req, res) => {
  const idNiveau = req.params.id;
  db.collection('subNiveaux')
    .where('niveauId', '==', idNiveau)
    .get()
    .then(data => {
      let subNiveaux = [];
      data.forEach(doc => {
        subNiveaux.push(doc.data());
      });
      return res.json(subNiveaux);
    })
    .catch(err => {
      return res.json(err);
    });
};

exports.postSubNiveauxByNiveau = (req, res) => {
  const idNiveau = req.params.id;
  const body = req.body;

  const subNewNiveau = {
    niveauId: idNiveau,
    name: body.name,
    id: `${idNiveau}${body.name}`,
  };
  db.collection('subNiveaux')
    .add(subNewNiveau)
    .then(doc => {
      return console.log('success', doc);
    })
    .then(
      db
        .doc(`/niveaux/${idNiveau}`)
        .update({
          subNiveaux: admin.firestore.FieldValue.arrayUnion(subNewNiveau),
        })
        .then(doc => {
          console.log(doc);
          return res.json({
            message: `document ${doc.id} modified successfully`,
          });
        }),
    )
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};
// exports.postSubNiveauxByNiveau = (req, res) => {
//   const idNiveau = req.params.id;
//   const body = req.body;

//   const subNewNiveau = {
//       niveauId : idNiveau,
//       name : body.name,
//       id : `${idNiveau}${body.name}`
//   }
//   db.collection('subNiveaux')
//   .add(subNewNiveau)
//   .then(doc => {
//     res.json({ message: `document ${doc.id} created successfully` });
//     return console.log('success', doc);
//   })
//   .catch(err => {
//     console.error(err);
//     res.json({ message: 'failed' });
//   });

// };

exports.putSubNiveauxByNiveau = (req, res) => {
  const idSousNiveau = req.params.id;
  const toUpdate = req.body.toUpdate;

  db.doc(`/subNiveaux/${idSousNiveau}`)
    .add(toUpdate)
    .then(doc => {
      return res.json({ message: `document ${doc.id} modified successfully` });
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};
