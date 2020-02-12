import React from 'react';
import AddToCartDialog from '../AddToCartDialog';
import BeerGridCell from '../../components/Beer';

class DrinksGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, beer: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick = (e, beer) => {
      //e.preventDefault();
      this.setState({
        isOpen: !this.state.isOpen,
        beer: beer
      });
  }

  handleClose = () => {
    this.setState({isOpen: false, beer: null});
  };


  render(){
    return (
      <div className="grid">
        <AddToCartDialog
          show={this.state.isOpen}
          onClose={this.handleClose}
          beer={this.state.beer}
        />
        {this.props.beers.map(beer => (
          <React.Fragment key={beer.id} >
          <div onClick={(e) => this.handleClick(e, beer)}>
            <BeerGridCell beer={beer}/>
          </div>
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default DrinksGrid;
