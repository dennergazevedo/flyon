/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// ROUTES
import { Switch } from 'react-router-dom';
import Route from './Route';

// COMPONENTS
import Homepage from '../views/Homepage';
import Notfound from '../views/Notfound';

export default function Routes(){

    return (
        <Switch>
            <Route path="/" exact component={Homepage}/>

            <Route path="/" component={Notfound} />
        </Switch>
    );
}