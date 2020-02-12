import React, { Component } from "react";
import { SwipeableDrawer, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Cart from '../Cart';

import './drawer.css';

const styles = theme => ({
  paper: {
    height: "calc(100% - 120px)",
    maxHeight: "none",
    //maxHeight: "96px",
    overflow: "visible",
    backgroundColor: "black"
  }
});

class BottomDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  toggleDrawer(open) {
    return event => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({ open });
    };
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    let className = 'wrapper';
    if (open) {
      className += ' wrapper-open';
    }

    return (
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={this.toggleDrawer(false)}
        onOpen={this.toggleDrawer(true)}
        ModalProps={{
          keepMounted: true
        }}
        swipeAreaWidth={45}
        classes={{
          paper: classes.paper
        }}
      >
        <div className={className}>
          <header>
            <div className="line"></div>
            <Typography variant="subtitle1">Shopping Cart</Typography>
            <Cart />
          </header>
        </div>
      </SwipeableDrawer>
    );
  }
}

export default withStyles(styles)(BottomDrawer);
