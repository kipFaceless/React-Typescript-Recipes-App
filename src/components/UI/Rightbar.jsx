import { Card,  makeStyles, Container } from "@material-ui/core";
import { useState, useEffect } from 'react';
import { query , orderBy , onSnapshot , collection   } from 'firebase/firestore';

import db from "../../firebase";
import List from "../recipes/List";




const useStyles = makeStyles((theme)=>({
  
    
    container : {
        height : "100vh",
        color : "white",
        paddingTop : theme.spacing(10),
        position : "sticky",
        top : 0,
      
        }
  
    }))       
const Rightbar = () => {
    const classes = useStyles()
    const [recipes, setRecipes] = useState([]);
   
  
    useEffect(() => {
  
      const collectionRef = collection(db, "recipes")
      const q = query(collectionRef, orderBy("date", "desc"));
  
      const unsub = onSnapshot(q, (snapshot) =>
        setRecipes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      );
  
      return unsub;
  
    }, []);

   
    return  (
        <Container className={classes.container} > 
         <List recipe={recipes} />
  
        </Container>
        
    ) 
    
   
}


export default Rightbar;