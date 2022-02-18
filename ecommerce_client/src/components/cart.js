import React,{Component} from "react";
import Navbar from "./navbar";
import {get_cart} from "./../actions/cartActions";
import {checkout} from "./../actions/orderActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CartItem from "./cart_item";
import Check from "./check";
import {withRouter} from "react-router-dom";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkout_clicked:false
        }
    }

    componentDidMount() {
        const {user}=this.props.user;
        this.props.get_cart(user.id);
    }
    
    displayCart = (cart) => {
        return Object.keys(cart).map((elt,idx) => {
            if(elt=="bill")
                return <h4 className="text-danger text-center" style={{fontFamily:'Lato'}} key={idx}>Total Bill: {cart[elt]}</h4>
        });
    }


    displayCartItems = (cart) => {
            return cart.items.map((item,idx) => {
                return <CartItem key={idx} userId={cart.userId} product_id={item.product_id} title={item.name} price={item.price} quantity={item.quantity} src={item.src} /> 
            });
    }

    checkout = () => {
        this.setState({checkout_clicked:true});
    }

    render()
    {
        const {cart}=this.props.cart;
        const {user}=this.props.user;
        return (
            <>
            <Navbar /><br></br><br></br>
            <div className="container">  
            {cart && cart.items && cart.items.length>0 ? <>
            <div className="border border-4 border-dark p-5">
            <h2 className="text-center" style={{fontFamily:'Montserrat',fontWeight:'bold'}}>Cart</h2><br></br>
            <ul>{this.displayCartItems(cart)}</ul>
            <br></br><br></br>
            <ul>{this.displayCart(cart)}</ul><br></br>
            <div className="text-center">
            <button type="button" className="btn btn-warning" style={{fontFamily:'Montserrat',fontSize:'30px'}} onClick={this.checkout}>Checkout</button>
            <br></br><br></br>
            {this.state.checkout_clicked==true?
            <>
            <Check id={user.id} amount={cart.bill} checkout={this.props.checkout} />
            </>
            :null}
            </div>
            </div>
            </> : <>
            <br></br>
            <h3 className="text-center">Cart empty.</h3>
            </>
            }
            </div>
            </>
        );
    }
}

Cart.propTypes = {
    cart:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,
    order:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    cart:state.cart,
    user:state.user,
    order:state.order,
    error:state.error
})

export default connect(mapStatetoProps,{get_cart,checkout})(withRouter(Cart));