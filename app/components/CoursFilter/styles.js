/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  capitalize: {
    textTransform: 'capitalize !important',
  },
  myActions: {
    color: '#1C3153',
    paddingLeft: 16,
    fontSize: 14,
    // fontWeight: 500,
    textTransform: 'uppercase',
  },
  history: {
    borderLeft: '1px solid #EDEDED',
    padding: '15px 16px',
    color: '#485563',
    fontSize: 14,
    '& img': {
      marginRight: 8,
    },
  },
  indicatorTab: {
    backgroundColor: '#32C284',
  },
  selectedTab: {
    color: '#32C284 !important',
    fontWeight: 600,
  },
  rootTab: {
    textTransform: 'none',
    color: '#7898AD',
    fontSize: 14,
    fontWeight: 500,
    width: 'fit-content',
    padding: '6px 24px',
    minWidth: 'auto',
    maxWidth: 'auto',
  },
  badgeTab: {
    right: -12,
    height: 16,
    minWidth: 16,
    backgroundColor: '#7898AD',
    color: '#FFFFFF',
  },
  rootTabStatus: {
    textTransform: 'none',
    color: '#7898AD',
    fontSize: 14,
    width: 210,
  },
  paperShadow: {
    boxShadow: '0 12px 40px -18px rgba(221,221,221,0.35)',
  },
  clear: {
    width: 20,
    height: 20,
  },
  clearButton: {
    padding: 5,
    marginRight: -8,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#F5F6F8',
    color: '#42526E',
    fontSize: 14,
  },
  chipLabel: {
    maxWidth: 250,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'initial',
  },
  chipContainer: {
    padding: '0 16px 16px 16px',
  },
  filterTitleContainer: {
    padding: '16px 16px 16px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    '& .filterTitle': {
      color: '#1C3153',
      fontSize: 14,
      textTransform: 'uppercase',
    },
    '& .filterReset': {
      color: '#2196F3',
      fontSize: 12,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  heart: {
    width: '19px',
    height: '19px',
    color: '#c5cbdb',
    float: 'left',
    marginTop: '-2px',
    marginRight: 6,
  },
  likedButton: {
    width: '19px',
    height: '19px',
    color: '#E32942',
    float: 'left',
    marginTop: '-2px',
    marginRight: 6,
  },
  manage: {
    borderLeft: '1px solid #EDEDED',
    textDecoration: 'unset',
    padding: '13.2px 16px',
  },
  buttonsIcons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
