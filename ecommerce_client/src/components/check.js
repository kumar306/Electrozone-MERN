import React,{Component} from "react";
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = "pk_test_51KPVhfSJtQLRleD46ZVMqFW29M6ZTxmHKkgrWHxzmDKDp3wfhQ5BxsSWBemAxuhniP64bLoIuWcLt0GVSnkzueto00hYn8gqAz";

class Check extends Component { 

    onToken = (user,checkout) => token => 
        checkout(user, token.id);

    render() {
        return (
            <>
             <StripeCheckout 
             amount={this.props.amount*100} 
             token={this.onToken(this.props.id,this.props.checkout)} 
             currency='INR' 
             stripeKey={STRIPE_PUBLISHABLE} />
            </>
        );
    }
}

export default Check;