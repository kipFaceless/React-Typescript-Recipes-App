
import Recipes from './recipes/Recipes';
import Leftbar from './UI/Leftbar';
import Rightbar from './UI/Rightbar';
import {  Grid, makeStyles } from '@material-ui/core';
import Feed from './UI/Feed';
import Navbar from './UI/Navbar';
import { Outlet } from 'react-router-dom';




const useStyles = makeStyles((theme)=>({

    right : {
      [theme.breakpoints.down("sm")]:{
        display :"none"
      }
    }
  }))

const DashboardGridRoutes = () => {

    const classes = useStyles()
    return <div>

            <Grid container>
            <Navbar />
            <Grid item sm={2} xs={2}>
              <Leftbar />
            </Grid>
            <Grid item sm={7}  xs={10}>
              <Feed >
              <Outlet />
              </Feed>
            </Grid>
            <Grid item sm={3}  className ={classes.right}>
              <Rightbar/>
            </Grid>
          
        </Grid>
      
    </div>;
}


export default  DashboardGridRoutes;