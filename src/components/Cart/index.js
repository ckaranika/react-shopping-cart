import React, { Component } from 'react';
import { connect } from 'react-redux'

import BeerCartCell from '../../components/BeerCartCell';

import './cart.css';

class Cart extends Component {

    render(){
      let { cart } = this.props;
      let cartItems = cart.addedItems.length ?
        (cart.addedItems.map(beer => {
          return (
            <li key={beer.id}>
              <BeerCartCell beer={beer}/>
            </li>
          )
        })) :
        (
          <p>How about having a beer?</p>
        )

      return (
        <div className="cart">
          <ul className="added-items">
            {cartItems}
          </ul>
        </div>
      )
    }
}

const mapStateToProps = (state)=>{
    return {
        cart: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)
