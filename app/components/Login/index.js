/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import {
  GreenButtonOutlined,
  GreenButton,
} from '../CustomizedElements/CustomizedElements';
import useStyles from './styles';

import CustomModal from '../CustomModal';

function Login() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomModal
        open={open}
        id="login"
        maxWidht="800"
        title="Connexion à l'interface"
        onClose={() => handleClose()}
      >
        <div className={classes.container}>
          <div className={classes.subContainer}>
            <div className={classes.textInformation}>
              Veuillez entrer vos coordonnées.
            </div>
            <div className={classes.rowContainer}>
              <TextField
                className={classes.field}
                id="email"
                label="Adresse email"
                placeholder="Adresse email"
                margin="dense"
                type="email"
                variant="outlined"
                fullWidth
                name="email"
              />
            </div>
            <div className={classes.rowContainer}>
              <TextField
                className={classes.field}
                id="password"
                label="Mot de passe"
                placeholder="Mot de passe"
                margin="dense"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
              />
            </div>
          </div>
          <div
            style={{ justifyContent: 'flex-end' }}
            className={classes.rowButtonsContainer}
          >
            <div className={classes.buttonContainer}>
              <GreenButtonOutlined
                // onClick={closeModalHandler}
                id="changePswdBtn"
              >
                Annuler
              </GreenButtonOutlined>
              <GreenButton
                id="validerBtn"
                style={{ marginRight: 0 }}
                type="submit"
                // disabled={
                //   !communeId ||
                //   formHasErrors(errors) ||
                //   values.password === ''
                // }
              >
                Valider
              </GreenButton>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

Login.propTypes = {};

export default memo(Login);
