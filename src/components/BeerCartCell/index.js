import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

import {
  remove,
  addQuantity,
  subtractQuantity
} from '../../actions/cart-actions'

import './beer-cart-cell.css';

class BeerCartCell extends React.Component {

  //to remove the item completely
  handleRemove = (id)=>{
      this.props.remove(id);
  }

  //to add the quantity
  handleAddQuantity = (id)=>{
      this.props.addQuantity(id);
  }

  //to subtract from the quantity
  handleSubtractQuantity = (id)=>{
      this.props.subtractQuantity(id);
  }

  render() {
    const { beer } = this.props;
    return (
      <div className="beer-cart-cell">
        <div>
          <div className="price">{beer.abv}</div>
          <Avatar variant="square" alt={beer.name} src={beer.image_url} />
        </div>
        <div>
          <div className="name">{beer.name}</div>
          <div className="tagline">{beer.tagline}</div>
        </div>
        <div>
          <Button className="minus" onClick={()=>{this.handleSubtractQuantity(beer.id)}}>-</Button>
          <div className="quantity">{beer.quantity}</div>
          <Button className="plus" onClick={()=>{this.handleAddQuantity(beer.id)}}>+</Button>
        </div>
        <div>
          <Button onClick={()=>{this.handleRemove(beer.id)}}>del</Button>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        remove: (id)=>{dispatch(remove(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(null, mapDispatchToProps)(BeerCartCell);
