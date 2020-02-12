import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

import './drinks-page.css';

import Drinks from './Drinks';
import PizzaDrinks from './PizzaDrinks';
import SteakDrinks from './SteakDrinks';

export default class DrinksPage extends React.Component {
  state = {index: 0};

  handleChange = (event, value) => {
    this.setState({index: value});
  };

  handleChangeIndex = index => {
    this.setState({index});
  };

  render() {
    const { index } = this.state;

    return (
      <div className="page page-drinks">
        <Tabs value={index} fullwidth='true' onChange={this.handleChange}>
          <Tab label="All" />
          <Tab label="Pizza" />
          <Tab label="Steak" />
        </Tabs>
        <SwipeableViews className="views" index={index} onChangeIndex={this.handleChangeIndex}>
          <div className="slide"><Drinks /></div>
          <div className="slide"><PizzaDrinks /></div>
          <div className="slide"><SteakDrinks /></div>
        </SwipeableViews>
      </div>
    );
  }
}
