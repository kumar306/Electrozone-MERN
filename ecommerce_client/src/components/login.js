import React, {Component} from "react";
import "./../App.css";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "./../actions/userActions";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email:"",
        password:"",
        msg:""
      }
    }

    componentWillReceiveProps(nextprops)
    {
      if(nextprops.error)
        this.setState({msg:nextprops.error.msg});
    }

    componentDidUpdate()
    {
      if(this.props.user.isAuthenticated)
        this.props.history.push("/home");
    }

    componentDidMount()
    {
      if(this.props.user.isAuthenticated)
        this.props.history.push("/home");
    }

    handleClick = e => {
      this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = e => {
      e.preventDefault();
      const new_user = {
        email:this.state.email,
        password:this.state.password
      }
      this.props.login(new_user.email,new_user.password);
    }
  
    render() {
      let msg=this.state.msg;
      console.log(this.state);
     return (
       <>
       <h1 id="loginh1">Login</h1>
       <br></br>
       <div className="border border-4 rounded border-dark p-5">
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="email" className="form-label">Enter email:</label>
         <input type="email" name="email" className={classnames("form-control border border-2 rounded",{invalid:msg})} onChange={this.handleClick} value={this.state.email}></input><br></br>
         <label htmlFor="password" className="form-label">Enter password:</label>
         <input type="password" name="password" className={classnames("form-control border border-2 rounded",{invalid:msg})} onChange={this.handleClick} value={this.state.password}></input><br></br>
         <Link to='/register' id="link1">Don't have an account yet? Register here.</Link>
         <br></br><br></br>
         <div className="text-center">
         <input type="submit" value="Login" className="btn btn-primary"></input>
         {Object.keys(this.state.msg).map((elt,idx) => {
                    return (
                    <p className="text-danger" key={idx}>Error: {this.state.msg[elt]}</p>
                    )
                })}
         </div>
       </form>
       </div>
       </>  
     );
    }
}

const mapStatetoProps = state => ({
  user:state.user,
  error:state.error
})

export default connect(mapStatetoProps,{login})(withRouter(Login));