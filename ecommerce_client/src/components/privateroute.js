import React,{Component} from "react";
import {Route,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({component:Component,user,...rest}) => (
        <Route {...rest} render={props => user.isAuthenticated ? 
            (<Component {...props} />) : (<Redirect to="/" />)
        } />
);

PrivateRoute.propTypes = {
    user:PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    user:state.user
});

export default connect(mapStatetoProps)(PrivateRoute);