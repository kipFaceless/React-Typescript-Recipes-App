import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Icon }  from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

  title: {
    flexFlow : 1
  },
}));

export const LoginScreen = () => {
  const classes = useStyles();
    return ( 
        <>
        
        <div >
      <AppBar position="static" >
        <Toolbar  disableElevation>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.title}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  className={classes.title}  align='center'>
            News
          </Typography>
          <Button color="inherit"  align='center'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
        <h1>Login SCREEN</h1>

        <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" disableElevation>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
      <Typography variant="body1" color="secondary" align='center'>Typo test</Typography>
    
        </>
     );
}
 
export default LoginScreen;