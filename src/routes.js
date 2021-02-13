import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Perfil from './view/Perfil';
import Index from './view/Index';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/perfil" component={Perfil} exact/>
            <Route path="/" component={Index} exact/>
        </BrowserRouter>
    )
}

export default Routes;