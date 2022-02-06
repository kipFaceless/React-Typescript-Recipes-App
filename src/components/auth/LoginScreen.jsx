import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Icon }  from '@material-ui/core'

import { useRef, useState  } from 'react';
import {signup, useAuth, logout, login, signInWithGoogle} from "../../firebase";


const useStyles = makeStyles((theme) => ({

  title: {
    flexFlow : 1
  },
}));

export const LoginScreen = () => {
    const currentUser = useAuth();
    const [loading, setLoading] = useState(false);
    let emailRef = useRef();
    const passwordRef = useRef();


  const handleSignup = async () =>{
          setLoading(true)
      try {
        await signup(emailRef.current.value, passwordRef.current.value).then(()=>{
          alert("Cadastrado com sucesso")
        }
          
        )
        
        
      } catch (error) {
        
        if(error=="FirebaseError: Firebase: Error (auth/email-already-in-use)."){
          alert("Este email já se encontra em uso")

        }
        if(error == "FirebaseError: Firebase: Error (auth/invalid-email)."){
          alert("Formato de e-mail inválido")
        }

        if(error == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)."){
          alert("A senha de conter no mínimo 6 caracteres")
        }
        
      }
     setLoading(false) 
  }

  const handleLogin = async () =>{
    setLoading(true)
try {
  await login(emailRef.current.value, passwordRef.current.value).then(()=>{
    // REDIRECT
  }
    
  )
  
  
} catch (error) {
 
  if(error=="FirebaseError: Firebase: Error (auth/wrong-password)."){
    alert("Palavra-passe incorrecta. Tente novamente")

  }
  if(error == "FirebaseError: Firebase: Error (auth/user-not-found)."){
    alert("Usuário não existente. Faça o seu cadastro para continuar")
  }

  
  
}
setLoading(false) 
}

 
  const handleLogout = async () =>{
    setLoading(true)
    try {
      

     await  logout();
    } catch (error) {
      
    }
    setLoading(false)    
  }

  const handleGoogleLogin = async () =>{
    setLoading(true)
    try {
       signInWithGoogle();
    
    } catch (error) {
      
    }
    setLoading(false)    
  }



  const classes = useStyles();
    return ( 
        <>
        
        <div >
      <AppBar position="static" >
        <Toolbar >
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
      <Button variant="contained" >Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
      <Typography variant="body1" color="secondary" align='center'>Typo test</Typography>

          <p>Logged as : {currentUser?.email}</p>
          <input ref={emailRef} type="email" placeholder='email'/> <br /> <br />
          <input ref={passwordRef} type="password" placeholder ='Password'/> <br /><br />
        {
          currentUser?.email? <button disabled={loading} onClick ={handleLogout}> Logout</button>: <button disabled={loading} onClick ={handleSignup}> Signup</button>

          
        }

        <button disabled={loading} onClick ={handleLogin}> Login</button>
        <button disabled={loading} onClick ={handleGoogleLogin}>Google Login</button>
        

        </>
     );
}
 
export default LoginScreen;