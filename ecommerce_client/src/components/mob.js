import React,{Component} from "react";
import Navbar from "./navbar";
import {view_item} from "./../actions/itemActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Mob extends Component {

    componentDidMount() {
        this.props.view_item(this.props.match.params.id)
    }

    createElements(n){
        const {item}=this.props.items;
        var elements = [];
        for(var i=0; i < item.stars; i++){
            elements.push(<span key={i} className="fa fa-star checked"></span>);
        }
        for(var i=item.stars;i<n;i++) {
            elements.push(<span key={i} className="fa fa-star"></span>);
        }
        return elements;
    }

    render()
    {
        const {item}=this.props.items;
        return (
            <>
        <Navbar />
        <br></br>
        <div className="container">
        <div className="card p-2">
        <div className="row">
            <div className="col-sm-6">
            <img className="img-fluid rounded-start" src={item.src}
                alt="Card image"></img>
            </div>
            <div className="col-sm-6">
                <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text text-danger">₹{item.price}</p>
                <h4>Rating:</h4>
                <ul>
                    {this.createElements(5)}
                </ul>
                <br></br>
                <h2>About the item:</h2>
                <p>{item.description}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
        );
    }
}

Mob.propTypes = {
    items:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    items:state.items,
    error:state.error
})

export default connect(mapStatetoProps,{view_item})(Mob);