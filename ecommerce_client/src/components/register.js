import React,{Component} from "react";
import "./../App.css"
import {connect} from "react-redux";
import {register} from "../actions/userActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

class Register extends Component {

    constructor() {
        super();
        this.state ={
            name:"",
            email:"",
            password:"",
            confirm_password:"",
            msg:{}
        }
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.error)
            this.setState({msg:nextprops.error.msg});
    }

    componentDidMount() {
        if(this.props.user.isAuthenticated)
            this.props.history.push("/home");
    }

    handleClick = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
  
        const new_user = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        };
      
        if(new_user.password!=this.state.confirm_password && new_user.password.length>0 && this.state.confirm_password.length>0)
        {
            alert("Password doesnt match");
            return;
        }
        else
            this.props.register(new_user.name,new_user.email,new_user.password,this.props.history);
    }

    render() { 

        let msg=this.state.msg;
    
        return (
            <>
            <Link to="/" className="btn btn-warning m-4 p-2">Back to login</Link>
            <div className="container m-5 p-3" id="register">
            <h1 id="regh1">Register</h1><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <div className="border border-4 rounded border-dark p-5">
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="form-label">Enter name:</label>
                <input type="text" name="name" className="form-control border border-2 rounded" onChange={this.handleClick} value={this.state.name}></input><br></br>
                <label htmlFor="email" className="form-label">Enter email:</label>
                <input type="email" name="email" className="form-control border border-2 rounded" onChange={this.handleClick} value={this.state.email}></input><br></br>
                <label htmlFor="password" className="form-label">Enter password:</label>
                <input type="password" name="password" className="form-control border border-2 rounded" onChange={this.handleClick} value={this.state.password}></input><br></br>
                <label htmlFor="confirm_password" className="form-label">Confirm password:</label>
                <input type="password" name="confirm_password" className="form-control border border-2 rounded" onChange={this.handleClick} value={this.state.confirm_password}></input><br></br>
                <div className="text-center">
                <input type="submit" value="Register" className="btn btn-primary"></input><br></br><br></br>
                {Object.keys(this.state.msg).map((elt,idx) => {
                    return (
                    <p className="text-danger" key={idx}>Error: {this.state.msg[elt]}</p>
                    )
                })}
                </div>
            </form>
            </div>
                </div>
                <div className="col-sm">
                </div>
                </div>
            </div> 
            </div>
            <div className="fixed-bottom bg-warning text-dark font-weight-bold text-center p-5">
            All rights reserved. @kumar306
            </div>
            </>
        );
    }
}

Register.propTypes = {
    user:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
}

const mapStatetoProps = state => ({
    user:state.user,
    error:state.error

});

export default connect(mapStatetoProps,{register})(withRouter(Register))