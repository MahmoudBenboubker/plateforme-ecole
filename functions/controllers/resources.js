/* eslint-disable prettier/prettier */
const { db, admin } = require('../util/admin');
const config = require('../util/config');

// No Resource
exports.postResourceByClasse = (req, res) => {
  const idClasse = req.params.id;
  const body = req.body;

  const newResource = {
    classeId: idClasse,
    title: body.title,
    content: body.content,
    matiere: body.matiere,
    createdAt: new Date().toISOString(),
    id: `${idClasse}${body.title}`,
  };
  db.collection('resources')
    .add(newResource)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
      return console.log('success', doc);
    })
    .catch(err => {
      console.error(err);
      res.json({ message: 'failed' });
    });
};

// Resource PDF, Image ...
exports.postResourceStoreByClasse = (req, res) => {
  const idClasse = req.params.id;


  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs');

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;
  // String for image token

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    console.log(fieldname, file, filename, encoding, mimetype);
    // my.image.png => ['my', 'image', 'png']
    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    // 32756238461724837.png
    imageFileName = `${Math.round(
      Math.random() * 1000000000000,
    ).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
            // //Generate token to be appended to imageUrl
            // firebaseStorageDownloadTokens: generatedToken,
          },
        },
      })
      .then(() => {
        // Append token to url
        const resourceUrl = `https://firebasestorage.googleapis.com/v0/b/${
          config.storageBucket
        }/o/${imageFileName}?alt=media`;

        const newResource = {
          classeId: idClasse,
          title: "addition",
          matiere: "mathematiques",
          createdAt: new Date().toISOString(),
          id: `${idClasse}$addition`,
          resourceUrl,
        };

        return db.collection('resources').add(newResource);
      })
      .then(() => {
        return res.json({ message: 'image uploaded successfully' });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ error: 'something went wrong' });
      });
  });
  busboy.end(req.rawBody);
};
