//import { Istate as IProps} from '../../RecipesApp'


import { Card, CardActionArea, CardMedia, makeStyles, Tooltip, Fab, Modal, Container, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'
import { useState } from 'react';


const useStyles = makeStyles((theme)=>({

    media: {
      height : 250,
      [theme.breakpoints.down("sm")]:{
          height : 150
      }
    },
    card :{
        marginBottom : theme.spacing(5)
    } ,

    container : {
        width : 500,
        height: 550,
        backgroundColor : "white",
        position : "absolute",
        margin : "auto",
        top : 0,
        bottom : 0,
        right : 0,
        left :0, 
        [theme.breakpoints.down("sm")]:{
            with :"100vw",
            height : "100vh"
        }
    },
}))



const List = ({ recipe }) => {

    const [open, setOpen] = useState (false);
   
    const [detailRecipe, setDetailRecipe] = useState ({})

    
    const classes = useStyles()
 
    const recipeDetails = (detailReciper) =>{
        
       setOpen(true)
        setDetailRecipe(detailReciper)
       console.log("open", open)

   
       
       }   

    const handleList = () => {
       return recipe.map(rec => {
            return (

                    <CardMedia key={rec.id} className= {classes.media}
                        image={rec.poster} alt={rec.name} width="150px" onClick = {() => {recipeDetails(rec)} }
                    />
                  
            )   

        })   

       
    }
   return (
   

     <Card>
         {handleList()}

         <Modal open = {open}>
        <Container className = {classes.container}>
     
                {
               <CardActionArea>
                     <Button variant='outlined' color="secondary" onClick={() => setOpen(false)}>Cancel   </Button>
                   <CardMedia className= {classes.media}
                       image={detailRecipe.poster} alt={detailRecipe.name} width="150px"  />
                      
                   
                   <h2><strong>{detailRecipe.name}</strong></h2>
                   <p> <strong>Prepare mode </strong>: {detailRecipe.prepare_mode}</p>
                   <p> <strong>Ingredients</strong>: {detailRecipe.stuff}</p>
                   <p> <strong>Duration </strong>: {detailRecipe.duration} min.</p>
                   <p> <strong>Calories </strong>: {detailRecipe.calories} g</p>
                   <p> <strong>Cost</strong>: {detailRecipe.cost} AKZ</p>
               </CardActionArea>
               }
        </Container>
       </Modal>

     </Card>
   
  
     )
    
    
   
    }
     



export default List;