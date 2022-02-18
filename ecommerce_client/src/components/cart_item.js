import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./../App.css"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {increase_quantity,decrease_quantity,delete_from_cart} from "./../actions/cartActions";

class CartItem extends Component {

    constructor(props) {
        super(props);
    }

    increase_quantity = () => {
        const userId=this.props.userId;
        const product_id=this.props.product_id;
        this.props.increase_quantity(userId,product_id);
    }

    decrease_quantity = () => {
        const userId=this.props.userId;
        const product_id=this.props.product_id;
        this.props.decrease_quantity(userId,product_id);
    }

    del_item = () => {
        const userId=this.props.userId;
        const product_id=this.props.product_id;
        this.props.delete_from_cart(userId,product_id);
    }

    render()
    {
        return (
            <>
        <div className="card p-2">
        <div className="row">
            <div className="col-sm-2">
            <img className="img-fluid rounded-start" src={this.props.src}
                alt="Card image" style={{height:'300px'}}></img>
            </div>
            <div className="col-sm-10">
                <div className="card-body">
                <h4 className="card-title" style={{fontFamily:'Quicksand'}}>{this.props.title}</h4>
                <p className="card-text text-danger">₹{this.props.price}</p>
                <br></br>
                <br></br><br></br>
                <div className="row">
                    <div className="col-sm-2">
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning" onClick={() => {
                            if(this.props.quantity>1)
                                this.decrease_quantity();
                            else
                                this.del_item();
                        }
                        }>-</button>
                        <button type="button" className="btn btn-warning">{this.props.quantity}</button>
                        <button type="button" className="btn btn-warning" onClick={this.increase_quantity}>+</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <h4 className="text-danger">Cost of Item: {this.props.quantity*this.props.price}</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
        );
    }
}

CartItem.propTypes = {
    cart:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    cart:state.cart,
    user:state.user,
    error:state.error
})

export default connect(mapStatetoProps,{increase_quantity,decrease_quantity,delete_from_cart})(CartItem);