import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";

import{ DashboardRoutes } from "./DashboardRouter";


export const AppRouter = () => {
    return ( 
        <BrowserRouter className="App">
     
      <Routes>
         
         <Route path="login" element={<LoginScreen />} />
         <Route path="/*"  element= {< DashboardRoutes />} /> 
         
      </Routes>
    </BrowserRouter>
     );
}
 
export default AppRouter;