

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { makeStyles, Tooltip, Fab, Modal, Container, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button, Snackbar } from '@material-ui/core';
import { Add as AddIcon} from '@material-ui/icons';


import MuiAlert from '@material-ui/lab/Alert'



const useStyles = makeStyles((theme)=>({
    fab : {
        position : 'fixed',
        bottom : 20,
        right : 20    
    },

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

    form : {
        padding : theme.spacing(2)
    },
    item:{
        marginBottom : theme.spacing(3)
    }
}))



function Alert(props)  {
    return <MuiAlert elevation={6} variant="filled" {...props}  /> ;
}   


const AddToList = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    

    const classes = useStyles()


    const [openAlert, setOpenAlert ] = useState(false)

    const handleClose = (event, reason) => {
        if(reason === "clickaway"){
            return;
        }

        setOpenAlert(false);
    }  
    
    const [open, setOpen] = useState (false);
    const onSubmit = (data, e) => {
        props.addRecipe(data)
        e.target.reset()
       
    }

    return (
        <>
        <Tooltip title="Add" aria-label='Add'
            onClick={() => setOpen(true)}
         >
            <Fab color='primary' className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>

        <Modal open = {open}>
         <Container className = {classes.container}>
        <form onSubmit =  { handleSubmit(onSubmit)}>
              <h2>Add Recipe</h2>

              <div className={classes.item}>
              <TextField label="title" size='small'  style={{width : "100%"}}/>
              </div>

            <input    className = "form-control mt-2"
                type ="text"     {...register("name", { required: true })} /> 
                
                {errors.name && <span>This field is required</span>}
             <textarea   
                 {...register("stuff")} 
                placeholder ="Ingredients"
                className = "form-control mt-2"
             
            />
            
            <textarea   defaultValue="Water required" 
                
                placeholder ="Water"
                className = "form-control mt-2"
               
                {...register("prepare_mode", { required: true })}
               // onChange = {(handleChange)}
               
            />
            <input 
                 {...register("duration")}   
                type ="text"
                placeholder ="Duration"
                className = "form-control mt-2"
                
                //onChange = {handleChange}
            />
            <input    
                type ="number"
                {...register("calories", )}  
                placeholder ="Calories"
                className = "form-control mt-2"
                name="calories"
                //onChange = {handleChange}
            />
            <input    
                type ="number"
                {...register("cost")}  
                placeholder ="Cost"
                className = "form-control mt-2"
               
                name="cost"
                //onChange = {handleChange}
            />
            <input    
                type ="text"
                {...register("poster")}  
                placeholder ="Poster"
                className = "form-control mt-2"
                name="poster"
                //onChange = {handleChange}
            />
                                
            
                <div className={classes.item}>
                 <Button variant='outlined' color="primary" style={{marginRight :20}}  
                           onClick = {() => setOpenAlert(true)}
                >Create</Button>

                 <Button variant='outlined' color="secondary" onClick={() => setOpen(false)}>Cancel   </Button>
                </div>

   
        </form>
        </Container>
        </Modal>

        <Snackbar open={openAlert} autoHideDuration ={4000} onClose={handleClose}
	        anchorOrigin = {{vertical:"top", horizontal:"right"}}
>
                <Alert onClose={handleClose} severity="success">
                    This Is a Success message
                </Alert>
            </Snackbar> 

        </>
          );
   
}

  
export default AddToList;

