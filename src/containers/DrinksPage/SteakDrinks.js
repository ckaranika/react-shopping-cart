import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getBeers } from '../../api/punkapi';

import DrinksGrid from './DrinksGrid';

let page = 1;

class SteakDrinks extends React.Component {
  state = { steakBeers: [] };

  componentDidMount() {
    getBeers(page, 'steak').then(beers=>{
      this.setState({ steakBeers: beers });
    });
  }

  fetchMoreData = () => {
    page++;
    getBeers(page, 'steak').then(beers=>{
      let totalBeers = this.state.steakBeers.concat(beers);
      this.setState({ steakBeers: totalBeers });
    });
  }

  render() {
    return (
      <InfiniteScroll
          dataLength={this.state.steakBeers.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<p>&nbsp;</p>}
          height={400}
        >
        <DrinksGrid beers={this.state.steakBeers} />
      </InfiniteScroll>
    );
  }
}

export default SteakDrinks;
