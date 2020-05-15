/* eslint-disable prettier/prettier */
// ++++++++++++++++++++++++++++++
// Utilities
// ++++++++++++++++++++++++++++++

exports.isEmail = email => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regex)) return true;
  else return false;
};

exports.isEmpty = string => {
  if (string.trim() === '') return true;
  else return false;
};
