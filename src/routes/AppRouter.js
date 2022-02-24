import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage";


import{ DashboardRoutes } from "./DashboardRouter";


export const AppRouter = () => {
    return ( 
        <BrowserRouter className="App">
     
      <Routes>
         
         <Route path="login" element={<LoginPage />} />
         <Route path="/*"  element= {< DashboardRoutes />} /> 
         
      </Routes>
    </BrowserRouter>
     );
}
 
export default AppRouter;