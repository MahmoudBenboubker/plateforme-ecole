/**
 *
 * Logout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import WarningIcon from '@material-ui/icons/Warning';
import {
  GreenButtonOutlined,
  GreenButton,
} from '../CustomizedElements/CustomizedElements';
import { mainColor } from '../../constants/constants';
import CustomModal from '../CustomModal';
import useStyles from '../Login/styles';

function Logout({ closeModal, logOutHandler }) {
  const classes = useStyles();

  return (
    <div>
      <CustomModal
        open
        id="logout"
        maxWidht="800"
        onClose={closeModal}
        title="Deconnexion"
      >
        <div className={classes.container}>
          <div className={classes.subContainer}>
            <div
              style={{
                textAlign: 'center',
                padding: '18px 0',
              }}
            >
              <WarningIcon fontSize="large" htmlColor={mainColor} />
            </div>
            <div className={classes.textInformation}>
              Voulez-vous vraiment vous déconnecter ?
            </div>
            <div
              style={{ justifyContent: 'flex-end' }}
              className={classes.rowButtonsContainer}
            >
              <div className={classes.buttonContainer}>
                <GreenButtonOutlined onClick={closeModal} id="cancelLogout">
                  Annuler
                </GreenButtonOutlined>
                <GreenButton
                  id="validerBtn"
                  style={{ marginRight: 0 }}
                  type="submit"
                  onClick={logOutHandler}
                >
                  Déconnexion
                </GreenButton>
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

Logout.propTypes = {
  logOutHandler: PropTypes.func,
  closeModal: PropTypes.func,
};

export default memo(Logout);
