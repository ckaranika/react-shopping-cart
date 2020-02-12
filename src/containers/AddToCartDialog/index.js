import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Collapse from '@material-ui/core/Collapse';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart-actions'

import './AddToCartDialog.css';

class AddToCartDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseDescription: true,
      collapseFoodPairing: true
    }
  }

  toggleCollapseDescription(){
    this.state.set({collapseDescription: !this.state.collapseDescription});
  }

  toggleCollapseFoodPairing(){
    this.state.set({collapseFoodPairing: !this.state.collapseFoodPairing});
  }

  handleClick = (beer) => {
      this.props.addItemToCart(beer);
      this.props.onClose();
  }

  render(){
    const { show, onClose, beer } = this.props;
    if(!show) {
      return null;
    }

    return (
      <Dialog
        open={this.props.show}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll='paper'
      >
        <DialogTitle id="alert-dialog-title">{beer.name}</DialogTitle>
        <DialogContent>
          <p>{beer.tagline}</p>
          <p>{beer.abv}</p>
          <div>
            <Collapse in={!this.state.collapseDescription} collapsedHeight={38}>
              {beer.description}
            </Collapse>
            <Button>Read {this.state.collapseDescription?'more':'less'}</Button>
          </div>
          <div>
            <Collapse in={!this.state.collapseFoodPairing} collapsedHeight={38}>
              {beer.food_pairing}
            </Collapse>
            <Button>Read {this.state.collapseFoodPairing?'more':'less'}</Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => {this.handleClick(beer)}} autoFocus>
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        addedItems: state.addedItems
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addItemToCart: (beer)=>{dispatch(addToCart(beer))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartDialog);
