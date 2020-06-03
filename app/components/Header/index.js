/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Menu, MenuItem } from '@material-ui/core';
import history from '../../utils/history';
import { mainColor } from '../../constants/constants';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const anchorLeft = 'left';

function Header({ niveaux, openModal, userState, openLogOutModal }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem onClick={() => history.push('/')} button key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <Divider />
        {niveaux.map((text, index) => (
          <ListItem button key={text.id}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
        <Divider />

        {userState && (
          <ListItem
            button
            onClick={() => {
              openLogOutModal();
            }}
            key="Deconnexion"
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Deconnexion" />
          </ListItem>
        )}

        {!userState && (
          <>
            <ListItem button onClick={() => openModal()} key="Connexion">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Connexion" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                history.push('/inscription');
              }}
              key="Inscription"
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Inscription" />
            </ListItem>
          </>
        )}
        <Divider />
        {userState && (
          <ListItem button onClick={() => history.push('/admin')} key="Admin">
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Interface Administrateur" />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar style={{ background: mainColor }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <Drawer
              anchor={anchorLeft}
              open={state[anchorLeft]}
              onClose={toggleDrawer('left', false)}
            >
              {list('left')}
            </Drawer>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <div>
              <IconButton onClick={() => history.push('/')}>
                <SchoolIcon color="action" />
              </IconButton>
            </div>
          </Typography>
          {!userState && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => openModal()}>Connexion</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    history.push('/inscription');
                  }}
                >
                  Inscription
                </MenuItem>
              </Menu>
            </div>
          )}
          {userState && (
            <Button
              onClick={() => {
                handleClose();
                openLogOutModal();
              }}
              color="inherit"
            >
              DECONNEXION
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {['left', 'right', 'top', 'bottom'].map(anchor => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

Header.propTypes = {
  niveaux: PropTypes.array.isRequired,
  openModal: PropTypes.func,
  userState: PropTypes.bool.isRequired,
  openLogOutModal: PropTypes.func,
};

export default Header;
