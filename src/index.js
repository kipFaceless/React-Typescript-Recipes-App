import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import { RecipesAppHome } from './RecipesAppHome';
import DashboardGridRoutes from './components/DashboardGrid';
import { AppRouter } from './routes/AppRouter';

ReactDOM.render(
 
    <RecipesAppHome />,
 
  document.getElementById('root')
);



