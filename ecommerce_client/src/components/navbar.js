import { connect } from "react-redux";
import React,{ Component } from "react";
import { BrowserRouter,Link,Route,Switch,Redirect,useHistory } from "react-router-dom";
import {logout} from "./../actions/userActions";
import PropTypes from "prop-types";
import "./../App.css";
import {withRouter} from "react-router-dom";

class Navbar extends Component {

    logoutclick = () => {
        this.props.logout();
        <Redirect to="/"></Redirect>
    }
    
    render()
    {
        const {user}=this.props.user;
        return (
            <>    
            <nav className="navbar navbar-expand-sm bg-warning">
            <button type="button" className="btn btn-lg p-2 m-3" onClick={()=>{this.props.history.goBack()}}><i className="bi bi-arrow-left-square-fill fa-2x"></i></button>
                <div className="container">
                <a className="navbar-brand text-dark h1 p-2 m-2" href="#" style={{fontFamily:"Montserrat",fontSize:'40px'}}>ELECTROZONE</a>
                <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item m-2 p-2">
                        <Link className="nav-link text-dark nav-body" to={`/orders/${user.id}`} style={{fontFamily:"Montserrat",fontWeight:'bold'}}>Your Orders</Link>
                    </li>
                    <li className="nav-item m-2 p-2">
                        <Link className="nav-link text-dark nav-body" to="/home" style={{fontFamily:"Montserrat",fontWeight:'bold'}}>Home</Link>
                    </li>
                    <li className="nav-item m-2 p-2">
                        <Link className="nav-link text-dark nav-body" to={`/profile/${user.id}`} style={{fontFamily:"Montserrat",fontWeight:'bold'}}>Your Profile</Link>
                    </li>
                    <li className="nav-item m-2 p-2">
                        <Link className="nav-link text-dark nav-body" to={`/cart/${user.id}`} style={{fontFamily:"Montserrat",fontWeight:'bold'}}>Cart</Link>
                    </li>
                    <li className="nav-item m-2 p-2">
                        <Link className="nav-link text-dark nav-body" to="/" onClick={this.logoutclick} style={{fontFamily:"Montserrat",fontWeight:'bold'}}>Logout</Link>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
            </>
        );
    }
}

Navbar.propTypes={
    user:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    user:state.user,
    error:state.error
})

export default connect(mapStatetoProps,{logout})(withRouter(Navbar));