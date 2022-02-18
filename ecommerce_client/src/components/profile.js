import React,{Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {load_user} from "./../actions/userActions";
import Navbar from "./navbar";

class Profile extends Component {
    
    render() {
        const {user}=this.props.user;
        return (
            <>
            <Navbar /><br></br><br></br>
            <div className="container">
                <h1 style={{fontFamily:'Montserrat',fontWeight:'bold'}}>Profile Details</h1>
                <div className="row">
                    <div className="col-sm-8">
                    <div className="text-center">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" value={user.name} className="form-control border border-5" readonly></input>
                    <br></br><br></br>
                    <label htmlFor="name" className="form-label">Email:</label>
                    <input type="text" value={user.email} className="form-control border border-5" readonly></input>
                        </div>  
                    </div>
                </div>
                
            </div><br></br>
            </>
        );
    }
}

Profile.propTypes = {
    user:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    user:state.user,
    error:state.error
})

export default connect(mapStatetoProps,{load_user})(Profile);