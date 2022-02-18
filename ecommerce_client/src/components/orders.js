import React,{Component} from "react";
import Navbar from "./navbar";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {get_orders} from "./../actions/orderActions";
import CartItem from "./cart_item";

class Orders extends Component {

    componentDidMount() {
        const {user}=this.props.user;
        this.props.get_orders(user.id);
    }

    displayOrders = (orders) => {
        return orders.map((cart,idx) => {
            return Object.keys(cart).map((elt2,idx) => {
            if(elt2=="bill")
                return <h4 key={idx} className="text-danger text-center" style={{fontFamily:'Lato'}} key={idx}>Total Bill: {cart[elt2]}</h4>
            else if(elt2=="date_ordered")
                return (
                    <>
                <h4 key={idx} className="text-danger text-center" style={{fontFamily:'Lato'}} key={idx}>Date Ordered: {cart[elt2]}</h4>
                    <br></br><br></br><hr style={{height:'7px',border:'none',color:'#333',backgroundColor:'#000'}}></hr>
                    </>
                );
            else if(elt2=="userId")    
                return <h4 key={idx} className="text-danger text-center" style={{fontFamily:'Lato'}} key={idx}>User ID: {cart[elt2]}</h4>
            else if(elt2=="items")
            {
                return cart.items.map((item,idx) => {
                    return <CartItem key={idx} userId={cart.userId} product_id={item.product_id} title={item.name} price={item.price} quantity={item.quantity} src={item.src} /> 
                });
            }
            
        }); 
    });       
}


    render() {
        const {orders}=this.props.order;
        return (
            <>
            <Navbar />
            <div className="container text-center">
                <br></br>
                {orders && orders.length>0?<>
                <ul>
                <br></br><br></br>
                {this.displayOrders(orders)}
                </ul>
                </>
                :<h3>Orders empty.</h3>} 
            </div>
            </>
        );
    }
}

Orders.propTypes = {
    error:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,
    order:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    order:state.order,
    user:state.user,
    error:state.error
})

export default connect(mapStatetoProps,{get_orders})(Orders);