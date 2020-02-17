import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render(){
    return <StripeCheckout
      name='Sasha'
      description='1 $ for 1 post'
      amount={100}
      token={token => this.props.handleToken(token)}
      stripeKey={process.env.STRIPE_KEY}
    >
      <button className='btn teal'>
         Pay to Say!
      </button>
    </StripeCheckout>
  }
}

export default connect(null, actions)(Payments);