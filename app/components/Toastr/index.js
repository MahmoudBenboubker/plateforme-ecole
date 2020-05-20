/**
 *
 * Toastr
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';
import { compose } from 'redux';
import useStyles from './styles';
import { removeToastAction } from '../../containers/App/actions';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const typeToastIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function Toastr({
  id,
  onClose,
  index,
  vertical = 'bottom',
  horizontal = 'right',
  autoHideDuration = 3000,
  className,
  message,
  typeToast,
  removeToast,
  ...other
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const Icon = typeToastIcon[typeToast];
  const bottom = 60 * index + 16;

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    removeToast(id);
  }

  return (
    <Snackbar
      style={{ position: 'fixed', bottom }}
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <SnackbarContent
        className={clsx(classes[typeToast], className)}
        aria-describedby="snackbar"
        message={
          <span id="snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
        {...other}
      />
    </Snackbar>
  );
}

Toastr.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  autoHideDuration: PropTypes.number,
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  typeToast: PropTypes.oneOf(['error', 'info', 'success', 'warning'])
    .isRequired,
  onClose: PropTypes.func,
  removeToast: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    removeToast: id => dispatch(removeToastAction(id)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Toastr);
