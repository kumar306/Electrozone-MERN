import React,{Component} from "react";
import Login from "./login";
import "./../App.css";


class Home extends Component {
  
  render()
  {
    return (
    <>
    <div className="container">
    <br></br><br></br><br></br>
      <div className="d-sm-flex justify-content-between align-items-center">
        <div className="container m-2 p-2">
      <div className="display-6" id="div1">Welcome to Electrozone, where we sell the best mobile phones, audio accessories, cameras and laptops.</div>
      </div><div className="container m-2 p-2" id="login">
      <Login />
      </div>
      </div>
    <br></br><br></br>
    </div>
    <div className="fixed-bottom bg-warning text-dark font-weight-bold text-center p-5">
      All rights reserved. @kumar306
    </div>
    </>
    );
    }
}


export default Home;