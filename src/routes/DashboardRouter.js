

import { Routes, Route } from "react-router-dom";
import Navbar from './../components/UI/Navbar';
import { RecipesAppHome } from './../RecipesAppHome';

import { Button, Grid, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';


const useStyles = makeStyles((theme)=>({

  right : {
    [theme.breakpoints.down("sm")]:{
      display :"none"
    }
  }
}))

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />
         
            
            <Routes>
                <Route path="/" element={<RecipesAppHome />} />

            </Routes>

        </>
    );
}

export default DashboardRoutes;
