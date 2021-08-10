import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from '../actions'



class Payments extends Component {
    render() {
        return (
            <div>
            <StripeCheckout
            name="Emaily"
            description="5usd for 5 credits" 
            amount={500}
            token={token=>{
            console.log(token)
            this.props.handleToken({id:token.id,amount:500})}}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}>
            
            </StripeCheckout>
            </div>
        );
    }
}

export default connect(null,actions)(Payments);
