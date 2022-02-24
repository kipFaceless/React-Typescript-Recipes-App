
import Recipes from './recipes/Recipes';
import Leftbar from './UI/Leftbar';
import Feed from './UI/Feed';
import Rightbar from './UI/Rightbar';
import {  Grid, makeStyles } from '@material-ui/core';




const useStyles = makeStyles((theme)=>({

    right : {
      [theme.breakpoints.down("sm")]:{
        display :"none"
      }
    }
  }))

const DashboardRoutes = () => {

    const classes = useStyles()
    return <div>

            <Grid container>
            <Grid item sm={2} xs={2}>
              <Leftbar />
            </Grid>
            <Grid item sm={7}  xs={10}>
              <Recipes />
            </Grid>
            <Grid item sm={3 }  className ={classes.right}>
              <Rightbar/>
            </Grid>
          
        </Grid>
      
    </div>;
}


export default DashboardRoutes;