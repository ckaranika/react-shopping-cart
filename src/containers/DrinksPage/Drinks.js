import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getBeers } from '../../api/punkapi';

import DrinksGrid from './DrinksGrid';

let page = 1;

class Drinks extends React.Component {
  state = { allBeers: [] };

  componentDidMount() {
    getBeers(page).then(beers=>{
      this.setState({ allBeers: beers });
    });
  }

  fetchMoreData = () => {
    page++;
    getBeers(page).then(beers=>{
      let totalBeers = this.state.allBeers.concat(beers);
      this.setState({ allBeers: totalBeers });
    });
  }

  render() {
    return (
      <InfiniteScroll
          dataLength={this.state.allBeers.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<p>&nbsp;</p>}
          height={400}
        >
        <DrinksGrid beers={this.state.allBeers} />
      </InfiniteScroll>
    );
  }
}

export default Drinks;
