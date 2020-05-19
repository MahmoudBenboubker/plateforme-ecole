/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/**
 *
 * CustomModal
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import {
  GreenButton,
  GreenButtonOutlined,
  WarningButton,
  WarningButtonOutlined,
} from '../CustomizedElements/CustomizedElements';
import useStyles from './styles';

const renderAction = (
  { action, disabled, id, style, label, focused, ...button },
  color,
  warningModal,
  green,
) => {
  const Button = color !== 'outlined' ? GreenButton : GreenButtonOutlined;
  const WarningButtonAction =
    color !== 'outlined' ? WarningButton : WarningButtonOutlined;
  const ActionButton = warningModal && !green ? WarningButtonAction : Button;
  return (
    button && (
      <ActionButton
        color="primary"
        type="submit"
        onClick={action || null}
        disabled={disabled}
        id={id || `btn-${label.substring(0, 3)}`}
        autoFocus={focused}
        style={
          color !== 'outlined' ? { ...style, marginRight: 0 } : { ...style }
        }
        {...button}
      >
        {label}
      </ActionButton>
    )
  );
};

function CustomModal({
  open,
  id,
  onClose,
  children,
  title,
  className,
  firstButton,
  secondButton,
  showActions,
  showSecondButton,
  maxWidth,
  intro,
  warningModal,
  width,
  height,
  icon,
  warningIntro,
  warningMessage,
  green,
  centerIntro,
  marginTopActions,
  padding,
}) {
  const classes = useStyles();
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      id={id}
      className={className}
      open={open}
      onClose={onClose}
      maxWidth="md"
    >
      <DialogTitle disableTypography>
        {title && <span className={classes.titre}>{title}</span>}
        <IconButton
          aria-label="Close"
          id="close"
          className={classes.modalCloseBtn}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.container} style={{ width, height }}>
        {icon && (
          <div className={classes.icon}>
            <img src={icon} alt="icon" />
          </div>
        )}
        {intro && (
          <DialogContentText style={centerIntro && { textAlign: 'center' }}>
            <Typography className={classes.subtitle}>
              <span>{intro}</span>
            </Typography>
          </DialogContentText>
        )}

        {warningModal && (warningIntro || warningMessage) && (
          <div className={classes.warningContainer}>
            <div className={classes.warningIntro}>{warningIntro}</div>
            <div className={classes.warningMessage}>{warningMessage}</div>
          </div>
        )}
        {children}
      </DialogContent>
      {(firstButton || secondButton) && (
        <DialogActions
          style={{
            justifyContent: warningModal ? 'center' : '',
            marginTop: marginTopActions ? 24 : '',
            padding,
          }}
          className={classes.dialogActions}
        >
          {showActions && firstButton && (
            <>
              {showSecondButton && (
                <>
                  {renderAction(
                    secondButton,
                    // || defaultSecond
                    'outlined',
                    warningModal,
                  )}
                </>
              )}
              {renderAction(firstButton, 'success', warningModal, green)}
            </>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

CustomModal.defaultProps = {
  className: '',
  showActions: true,
  showSecondButton: true,
  maxWidth: 'md',
  padding: '24px 16px',
};
CustomModal.propTypes = {
  open: PropTypes.bool,
  firstButton: PropTypes.object,
  onClose: PropTypes.func,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  className: PropTypes.string,
  secondButton: PropTypes.object,
  showActions: PropTypes.bool,
  showSecondButton: PropTypes.bool,
  maxWidth: PropTypes.string,
  intro: PropTypes.string,
  warningModal: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  icon: PropTypes.string,
  warningIntro: PropTypes.string,
  warningMessage: PropTypes.string,
  green: PropTypes.bool,
  centerIntro: PropTypes.bool,
  marginTopActions: PropTypes.bool,
  padding: PropTypes.string,
};

export default memo(CustomModal);
