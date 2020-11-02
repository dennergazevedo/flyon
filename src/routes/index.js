/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// ROUTES
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

// COMPONENTS
import Homepage from '../views/Homepage';

export default function Routes(){

    return (
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}