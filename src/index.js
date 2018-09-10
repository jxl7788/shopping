import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';
import "./assets/css/base.css";
import "./assets/css/footer.css"

import {BrowserRouter,Route} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>,
     document.getElementById('root')
    );

