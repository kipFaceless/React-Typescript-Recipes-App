

import { Routes, Route } from "react-router-dom";
import { RecipesAppHome } from '../RecipesAppHome';
import { Navbar } from './../components/ui/Navbar';

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
