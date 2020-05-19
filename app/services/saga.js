/* eslint-disable prettier/prettier */
const axios = require('axios');
const urlApi = 'https://europe-west1-plateforme-ecole.cloudfunctions.net/api';

exports.callApi = url => {
  axios.get(`${urlApi}/niveaux`);
};
