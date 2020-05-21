/* eslint-disable indent */
/* eslint-disable prettier/prettier */
export const niveaux = [
  {
    id: '1',
    name: 'École maternelle',
    subNiveaux: [
      { id: '11', name: 'PS' },
      { id: '12', name: 'MS' },
      { id: '13', name: 'GS' },
    ],
    image:
      'https://www.mairie-villemur-sur-tarn.fr/web/wp-content/uploads/2020/03/Ecole-Maison-Maternelle-scaled.jpg',
  },
  {
    id: '2',
    name: 'École Primaire',
    subNiveaux: [
      { id: '21', name: '1er Niveau' },
      { id: '22', name: '2eme Niveau' },
      { id: '23', name: '3eme Niveau' },
      { id: '24', name: '4eme Niveau' },
      { id: '25', name: '5eme Niveau' },
    ],
    image:
      'https://i.pinimg.com/736x/ac/6e/ee/ac6eeee6777e21162bf8ab3acf1982b0.jpg',
  },
  {
    id: '3',
    name: 'Collège',
    subNiveaux: [
      { id: '31', name: '1er Niveau' },
      { id: '32', name: '2eme Niveau' },
      { id: '33', name: '3eme Niveau' },
    ],
    image:
      'https://img.favpng.com/4/4/15/vector-graphics-national-secondary-school-student-study-skills-png-favpng-P2tTWdZwXmjznWYw3hnXr8Qg6.jpg',
  },
];

export const mainColor = '#0DC8B2';

export const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formHasErrors = errors =>
  Object.keys(errors).some(key => {
    const value = errors[key];

    if (value && typeof value === 'object') {
      return formHasErrors(value);
    }

    return typeof value !== 'undefined';
  });

export const HTTP_STATUS_ERROR = 500;
export const HOSTNAME =
  'https://europe-west1-plateforme-ecole.cloudfunctions.net';

  /** Toast Types */
export const TOAST_SUCCESS = 'success';
export const TOAST_ERROR = 'error';
export const TOAST_WARNING = 'warning';
export const TOAST_INFO = 'info';