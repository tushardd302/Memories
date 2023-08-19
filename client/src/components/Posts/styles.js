import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  gridContainer:{
    display: 'flex',
    alignItems: 'center',
    height: theme.spacing(100) // Corrected the semicolon to a comma
  }
}));