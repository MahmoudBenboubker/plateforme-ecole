/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  rowButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '12px',
    marginTop: '12px',
  },
  textInformation: {
    height: '17px',
    color: '#485563',
    fontSize: '14px',
    lineHeight: '17px',
    marginBottom: '20px',
  },
  field: {
    boxSizing: 'border-box',
    height: '40px',
    width: '316px',
  },
  straightLine: {
    boxSizing: ' border-box',
    height: '2px',
    border: '1px',
    borderColor: '#EFF2FF',
    borderStyle: 'solid',
    marginTop: '27px',
    marginBottom: '22px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
