import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#00a651'),
    backgroundColor: '#00a651',
    border: 'solid 1px #00a651',
    '&:hover': {
      backgroundColor: '#00a651',
    },
    minWidth: '140px',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '16px',

  },
}))(Button);

const Outline_Button = withStyles((theme) => ({
  root: {
    color: '#00a651',
    border: 'solid 1px #00a651',
    '&:hover': {
      backgroundColor: '',
      color: '#00a651',
      borderColor: '#00a651',
    },
    textTransform: 'none',
    minWidth: '140px',
  },
}))(Button);

const OutlineColorButton = withStyles((theme) => ({
  root: {
    color: '#00a651',
    
    border: 'solid 1px #00a651',
    borderRadius: '30px',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#00a651',
      color: 'white',
      borderColor: '#00a651',
    },
    textTransform: 'none',
    minWidth: '140px',
  },
}))(Button);

const OutlineButton = withStyles((theme) => ({
  root: {
    color: '#000000',
    borderColor: 'none',
    border: 'solid 1px #000000',
    borderRadius: '30px',
    fontSize: '16px',
    textTransform: 'none',
    minWidth: '140px',
    '&:hover': {
      backgroundColor: '#00a651',
      color: 'white',
      borderColor: '#00a651',
    },
  },
}))(Button);

const OutlineWhiteButton = withStyles((theme) => ({
  root: {
    color: '#ffffff',
    borderColor: 'none',
    border: 'solid 1px #ffffff',
    borderRadius: '30px',
    fontSize: '16px',
    textTransform: 'none',
    minWidth: '140px',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#00a651',
      borderColor: '#ffffff',
    },
  },
}))(Button);

const OutlineGrieenColorButton = withStyles((theme) => ({
  root: {
    color: '#00a651',
    borderColor: '#00a651',
    '&:hover': {
      backgroundColor: '#00a651',
      color: 'white',
    },
    textTransform: 'none',
    width: '150px',
    borderRadius: '20px'
  },
}))(Button);



export default {
  ColorButton,
  Outline_Button,
  OutlineGrieenColorButton,
  OutlineColorButton,
  OutlineButton,
  OutlineWhiteButton
}