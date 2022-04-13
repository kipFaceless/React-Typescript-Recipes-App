import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContextProvider from "../contexts/AuthContext";
import Recipes from "../recipes/Recipes";
import AddToList from './../recipes/AddToList';

const Feed = () => {
    return <div>
    
    <BrowserRouter >
      <AuthContextProvider>
      <Routes>
       
       
         <Route path="/recipes/*"  element= {< Recipes/>} > 
         <Route  exact path="add"  element= {<p> WEEWFWF</p> } /> 

         </Route>
         
       
         
      </Routes>
      </AuthContextProvider> 
    </BrowserRouter>
    </div>;
}


export default Feed;