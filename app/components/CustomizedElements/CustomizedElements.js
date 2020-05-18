import React from 'react';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

export const GreenCheckbox = withStyles({
  root: {
    color: '#0DC8B2',
    '&$checked': {
      color: '#0DC8B2',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  checked: {},
})(props => (
  <Checkbox
    onMouseEnter={ev => {
      ev.preventDefault();
    }}
    color="default"
    {...props}
  />
));

/** Texfields */
export const TextFieldCustom = withStyles({
  // root: {
  //   width: '100%'
  // },
})(props => (
  <TextField
    fullWidth
    type="text"
    variant="outlined"
    margin="dense"
    {...props}
  />
));

/** Big buttons */
export const BigButton = withStyles({
  root: {
    color: 'white',
    // height: 40,
    display: 'block',
    boxShadow: 'none',
    padding: '8px 16px',
    marginRight: 16,
    '& :first-letter': {
      textTransform: 'capitalize',
    },
    textTransform: 'lowercase',
    '& :focus': {
      outline: 'none !important',
      boxShadow: 'none',
    },
  },
})(props => (
  <Button variant="contained" size="medium" color="primary" {...props} />
));

export const GreenButton = withStyles({
  root: {
    background: '#0DC8B2',
    '&:hover': {
      background: '#00A693',
    },
  },
})(props => <BigButton {...props} />);

export const GreenButtonOutlined = withStyles({
  root: {
    backgroundColor: '#E6E6E6',
    color: '#485563',
    '&:hover': {
      background: '#c7c6c6',
    },
  },
})(props => <BigButton {...props} />);

export const WarningButton = withStyles({
  root: {
    background: '#FF6D66',
    '&:hover': {
      background: '#E45B54',
    },
  },
})(props => <BigButton {...props} />);

export const WarningButtonOutlined = withStyles({
  root: {
    backgroundColor: '#E6E6E6',
    color: '#485563',
    '&:hover': {
      background: '#c7c6c6',
    },
  },
})(props => <BigButton {...props} />);

/** Small buttons */
export const ButtonSmall = withStyles({
  root: {
    height: 32,
    opacity: 0.87,
    borderRadius: 3,
    boxShadow: 'none',
    color: '#FFF',
    padding: '5px 10px',
    marginRight: 8,
  },
})(props => <Button variant="contained" {...props} />);

export const GreenButtonSmall = withStyles({
  root: {
    background: '#0DC8B2',
    '&:hover': {
      background: '#00A693',
    },
  },
})(props => <ButtonSmall {...props} />);

export const BlackButtonSmall = withStyles({
  root: {
    backgroundColor: '#485563',
  },
})(props => <ButtonSmall {...props} />);

export const RedButtonSmall = withStyles({
  root: {
    backgroundColor: '#E76E54',
    '&:hover': {
      background: '#d57965',
    },
  },
})(props => <ButtonSmall {...props} />);

export const BlueButtonSmall = withStyles({
  root: {
    backgroundColor: '#2196F3',
    '&:hover': {
      background: '#3ea5f7',
    },
  },
})(props => <ButtonSmall {...props} />);

export const CardContentCustomised = withStyles({
  root: {
    padding: '0px 16px',
    boxShadow: 'none',
  },
})(props => <CardContent {...props} />);
