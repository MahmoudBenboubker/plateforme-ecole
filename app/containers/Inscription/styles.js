/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  loading: {
    textAlign: 'center',
    width: '100%',
    marginTop: '16px',
  },
  action: {
    height: 94,
    borderRadius: 5,
    background:
      'linear-gradient(17deg, rgba(38, 215, 146, 0.84) 7%, #09C6B7 30%)',
    boxShadow: '0 26px 51px 0 rgba(0, 0, 0, 0.08)',
    margin: '8px 0px 8px;',
    display: 'flex',
    padding: '24px 24px',
    '& .content': {
      flexGrow: 1,
      marginLeft: 42,
    },
    '& .intro': {
      color: '#FFFFFF',
      fontSize: 14,
      marginBottom: 8,
    },
    '& .title': {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 500,
    },
    '& button': {
      color: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 4,
      height: 37,
      marginTop: 4,
    },
  },
  daysRemaining: {
    color: '#8798AD',
    textAlign: 'center',
    width: 170,
    textTransform: 'uppercase',
  },
  CircularProgress: {
    width: 170,
    height: 100,
  },
  paperShadow: {
    boxShadow: '0 12px 40px -18px rgba(221,221,221,0.35)',
  },
  progressContainer: {
    width: 220,
    borderRight: '1px solid #E9ECF4',
    padding: '14px 24px',
    margin: '10px 0px',
  },
  kpiContainer: { display: 'flex', flexWrap: 'wrap', marginBottom: 24 },
  paper: {
    display: 'flex',
    flexGrow: 1,
  },
  welcome: {
    padding: 24,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
  },
  name: {
    color: '#2E384D',
    fontSize: 25,
  },
  site: {
    color: '#B0BAC9',
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
  },
  locationIcon: {
    color: '#BFC5D2',
    fontSize: 17,
    marginRight: 4,
  },
  buttonsContainer: {
    display: 'flex',
    '& .button': {
      display: 'flex',
      backgroundColor: '#DCE5F5',
      height: 40,
      borderRadius: 2,
      color: '#485563',
      fontSize: 14,
      alignItems: 'center',
      cursor: 'pointer',
      width: 150,
      justifyContent: 'center',
    },
    '& .button:first-child': {
      marginRight: 8,
    },
  },
  heart: {
    width: '15px',
    color: '#E32942',
    marginRight: 2,
  },
  suggested: {
    margin: '4px 0',
    marginLeft: -8,
  },
}));
