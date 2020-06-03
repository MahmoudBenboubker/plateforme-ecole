/* eslint-disable prettier/prettier */
const { db } = require('../util/admin');

exports.getClasseBySubNiveau = (req, res) => {
  const idSubNiveau = req.params.id;
  db.collection('classes')
    .where('subNiveauId', '==', idSubNiveau)
    .get()
    .then(data => {
      let classes = [];
      data.forEach(doc => {
        classes.push(doc.data());
      });
      return res.json(classes);
    })
    .catch(err => {
      return res.json(err);
    });
};

exports.postClasseBySubNiveau = (req, res) => {
  const idSubNiveau = req.params.id;
  const body = req.body;

  const newClasse = {
    subNiveauId: idSubNiveau,
    name: body.name,
    id: `${idSubNiveau}${body.name}`.replace(/\s/g, ''),
  };
  db.collection('classes')
    .add(newClasse)
    .then(doc => {
      return res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};

exports.putClasseBySubNiveau = (req, res) => {
  const idClasse = req.params.id;
  const toUpdate = req.body.toUpdate;

  db.doc(`/classes/${idClasse}`)
    .add(toUpdate)
    .then(doc => {
      return res.json({ message: `document ${doc.id} modified successfully` });
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};

exports.deleteClasseById = (req, res) => {
  const idClasse = req.params.id;

  db.collection(`classes`)
    .where('id', '==', idClasse)
    .get()
    .then(data => {
      data.forEach(doc => {
        console.log(doc.data());
        doc.ref.delete();
      });
      return res.json({ message: `document ${doc.id} deleted successfully` });
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};
