import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './beer.css';

class BeerGridCell extends React.Component {

  render() {
    const { beer } = this.props;
    return (
      <div className="beer">
        <Avatar variant="square" alt={beer.name} src={beer.image_url} />
        <div>{beer.name}</div>
        <div>{beer.abv}</div>
      </div>
    );
  }

}

export default BeerGridCell;
