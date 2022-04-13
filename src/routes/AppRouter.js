import { Routes, Route, BrowserRouter, } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import{ DashboardRoutes } from "./DashboardRouter";
import NotfoundPage from './../pages/NotfoundPage';
import AuthContextProvider from "../components/contexts/AuthContext";
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import AddToList from "../components/recipes/AddToList";



export const AppRouter = () => {
    return ( 
    <BrowserRouter >
      <AuthContextProvider>
      <Routes>
       
         <Route path="login" element={<LoginPage />} />
         <Route exact path="register" element={<RegisterPage />} />
         <Route exact path="forgot-password" element={<ForgotPasswordPage />} />
         <Route path="reset-password" element={<ResetPasswordPage />} />
        
         <Route path="/"  element={<LoginPage />} />
         <Route exact path="add"  element= {< AddToList />} /> 

        
         
       
         
      </Routes>
      </AuthContextProvider> 
    </BrowserRouter>
     );
}
 
export default AppRouter;