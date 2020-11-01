import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    Cad,
    Admin,
    ...rest
}) {
    const { signed, adm } = store.getState().auth;

    if(!signed && isPrivate){
        return <Redirect to="/"/>
    }

    if(!signed && Admin){
        return <Redirect to="/"/>
    }

    if(Admin && !adm){
        return <Redirect to="/" />
    }

    if(signed && Cad){
        return <Redirect to="/"/>
    }

    return <Route {...rest} component={Component}/>
}

RouteWrapper.propTypes={
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
    Cad: false,
};