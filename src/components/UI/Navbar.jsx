import { alpha, AppBar, Avatar, Badge, Button,  InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Cancel, Mail, NotificationImportant, NotificationImportantRounded, Search } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({

    logoLg :{
        display : "none",
        [theme.breakpoints.up("sm")]: {
            display : "block"
        }
    },
    logoSm : {
      display : "block",
      [theme.breakpoints.up("sm")]:{
          display : "none"
      }
    },

    toolbar : {
        display : "flex",
        justifyContent : "space-between"

    },
    search :{
        display : "flex",
        alignItems : "center ",
        backgroundColor : alpha(theme.palette.common.white, 0.15),
        '&:hover' : {
            backgroundColor : alpha(theme.palette.common.white, 0.25)
        },
        borderRadius : theme.shape.borderRadius,
        width : "35%",
        paddingLeft : theme.spacing(1),

        [theme.breakpoints.down("sm")]:{
            display : (props) => (props.open ? "flex" : "none"),
            width : "65%",
        }
    },

    input : {
        color : "white",
        marginLeft : theme.spacing(1)
    },

    SearchButton : {
        marginRight : theme.spacing(3),
        [theme.breakpoints.up("sm")]:{
            display : "none",
        }
     },
    icons : {
       
        alignItems: "center",
        display : (props) => (props.open ? "none" : "flex"),
      
      
    },
       badge : {
    marginRight : theme.spacing(2)
   },

   cancel :{
        marginLeft : "50%",
        [theme.breakpoints.up("sm")] : {
            display : "none"
        }
   }
     
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})
    return <AppBar position="sticky">

            <Toolbar className={classes.toolbar}>
                <Typography variant ="h6" component="h2" className={classes.logoLg}>
                    Kip3r K1tchen
                </Typography>
                <Typography variant ="h6" component="h2" className={classes.logoSm}>
                    K1P
                </Typography>
                <div className= {classes.search}>
                    <Search  />
                    <InputBase placeholder='Search...' className={ classes.input}/>
                    <Cancel className={classes.cancel} onClick ={()=> setOpen(false)}/>
                </div>
                <div  className={classes.icons}>
                     
                    <Badge badgeContent = {4} color="secondary" className={classes.badge}>
                        <Mail /> 
                    </Badge>

                    <Badge badgeContent = {2} color="secondary" className={classes.badge} >
                        <NotificationImportantRounded /> 
                    </Badge>
                    <Avatar alt="Kip Face" src="https://avatars.githubusercontent.com/u/39622841?v=4" />

                </div>
            </Toolbar>

        </AppBar>
}


export default Navbar;