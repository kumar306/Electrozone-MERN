import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./../App.css"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {add_to_cart} from "./../actions/cartActions";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity:1,
            productId:""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    createElements(n){
        var elements = [];
        for(var i=0; i < parseInt(this.props.stars); i++){
            elements.push(<span key={i} className="fa fa-star checked"></span>);
        }
        for(var i=parseInt(this.props.stars);i<n;i++) {
            elements.push(<span key={i} className="fa fa-star"></span>);
        }
        return elements;
    }

    add_cart = () => {
        const {user}=this.props.user;
        const quantity=this.state.quantity;
        console.log(quantity);
        console.log(this.props.id);
        this.props.add_to_cart(user.id,this.props.id,quantity,this.props.src);
        alert("Added to cart successfully");
    }

    render()
    {
        const id=this.props.id;
        const quantity=this.state.quantity;
        return (
            <>
        <div className="card p-2">
        <div className="row">
            <div className="col-sm-3">
            <img className="img-fluid rounded-start" src={this.props.src}
                alt="Card image" style={{height:'300px'}}></img>
            </div>
            <div className="col-sm-9">
                <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text text-danger">₹{this.props.price}</p>
                <ul>
                    {this.createElements(5)}
                </ul>
                <br></br>
                <div className="row">
                    <div className="col-sm-2">
                    <label htmlFor="quantity" className="form-label">Quantity:</label>
                    </div>
                    <div className="col-sm-2">
                    <input type="number" name="quantity" className="form-control" min="1" max="5" value={this.state.quantity} onChange={this.handleChange}></input>
                    </div>
                </div>
                <br></br><br></br>
                <div className="d-flex">
                <button className="btn btn-warning m-2" onClick={this.add_cart}>Add to cart</button>
                <Link to={`/home/${id}`} className="btn btn-warning m-2">About this item</Link>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
        );
    }
}

Product.propTypes = {
    cart:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    cart:state.cart,
    user:state.user,
    error:state.error
})

export default connect(mapStatetoProps,{add_to_cart})(Product);