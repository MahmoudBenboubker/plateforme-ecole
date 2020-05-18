/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  titre: {
    color: '#8798AD',
    fontFamily: 'Montserrat',
    fontSize: 14,
    letterSpacing: 1.31,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: '#485563',
    fontFamily: 'Montserrat',
    fontSize: 14,
    marginBottom: '10px',
  },
  modalCloseBtn: {
    position: 'absolute',
    right: 8,
    top: 2,
  },
  icon: {
    textAlign: 'center',
    padding: '24px 0',
  },
  dialogActions: {
    padding: '32px 0',
    '& button': {
      marginLeft: 0,
    },
  },
  warningContainer: {
    textAlign: 'center',
    fontSize: 12,
    padding: '0 16px',
  },
  warningIntro: {
    paddingBottom: 16,
  },
  warningMessage: {
    color: '#1C3153',
    fontWeight: 500,
  },
  paper: {
    overflowY: 'inherit!important',
  },
  container: {
    '@media (-moz-os-version: windows-xp), (-moz-os-version: windows-vista),(-moz-os-version: windows-win7),(-moz-os-version: windows-win8)': {
      '&&::-webkit-scrollbar': {
        backgroundColor: '#f4f4f4',
        width: 8,
      },
      /* background of the scrollbar except button or resizer */
      '&&::-webkit-scrollbar-track': {
        backgroundColor: '#fff',
      },
      '&&::-webkit-scrollbar-track:hover': {
        backgroundColor: '#fff',
      },
      /* scrollbar itself */
      '&&::-webkit-scrollbar-thumb': {
        backgroundColor: '#c1c7d0',
      },
      '&&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#c1c7d0',
      },

      /* set button(top and bottom of the scrollbar) */
      '&&::-webkit-scrollbar-button': {
        display: 'none',
      },
    },
  },
});
