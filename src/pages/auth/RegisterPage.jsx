import React, { useEffect, useRef, useState } from 'react'
//import { FaGoogle } from 'react-icons/fa'
//import { useHistory } from 'react-router-dom'


import { useAuth } from '../../../src/components/contexts/AuthContext';
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom'


const RegisterPage = () => {
   // const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmiting, setisSubmiting] = useState(false)
   // const toast = useToast()
  
    const {register, signInWithGoogle} = useAuth()
    return (
      <>
        <h4 textAlign='center' my={12}>
          Register
        </h4>
        <form  onSubmit={async e => {
              e.preventDefault()
              // your register logic here
              if(!email || !password){
                 /* toast({
                    description : " Credentials not valid",
                    status : 'error',
                    duration : 5000,
                    isClosable : true
                  }) */
              }
              setisSubmiting(true)
              register(email, password)
              .then((response) => console.log(response))
              .catch((error) => {console.log(error.message)
             /* toast({
                description : error.message,
                status : 'error',
                duration : 5000,
                isClosable : true*/
         })}}  >
    
             
                <label>Email address</label>
                <input
                value={email}
                onChange = {(e) => setEmail(e.target.value) } name='email' type='email' autoComplete='email' required />
            
              
                <label>Password</label>
               <input  
                  name='password'
                  type='password'
                  autoComplete='password'
                  required
                  value={password}
                  onChange= {(e) => setPassword(e.target.value)}
                />
            
              <Button  type='submit' colorScheme='primary' size='lg' fontSize='md'>
                Sign up
              </Button>
           
         
          
            <Button variant='link' >
               <Link to =  '/login'>    Login </Link>
            </Button>
      
               OR
          <Button
            variant='outline'
            
            onClick={() => signInWithGoogle().then(user => console.log(user))
              .catch(error => console.log(error))
            } 
          >
            Sign in with Google
          </Button>
         
         
         
        </form>
         </>
     
    )
  }
export default RegisterPage;