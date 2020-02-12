import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getBeers } from '../../api/punkapi';

import DrinksGrid from './DrinksGrid';

let page = 1;

class PizzaDrinks extends React.Component {
  state = { pizzaBeers: [] };

  componentDidMount() {
    getBeers(page, 'pizza').then(beers=>{
      this.setState({ pizzaBeers: beers });
    });
  }

  fetchMoreData = () => {
    page++;
    getBeers(page, 'pizza').then(beers=>{
      let totalBeers = this.state.pizzaBeers.concat(beers);
      this.setState({ pizzaBeers: totalBeers });
    });
  }

  render() {
    return (
      <InfiniteScroll
          dataLength={this.state.pizzaBeers.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<p>&nbsp;</p>}
          height={400}
        >
        <DrinksGrid beers={this.state.pizzaBeers} />
      </InfiniteScroll>
    );
  }
}

export default PizzaDrinks;
