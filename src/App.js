import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import history from './utils/history';
import configureStore from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { RoutedTabs, NavTab } from "react-router-tabs";

import Header from './components/Header';
import BottomDrawer from "./components/BottomDrawer";

import DrinksPage from './containers/DrinksPage';
import FoodsPage from './containers/FoodsPage';
import OffersPage from './containers/OffersPage';
import NotFoundPage from './containers/NotFoundPage';

import 'react-router-tabs/styles/react-router-tabs.css';

import { LocalCafe, LocalDining, NewReleases} from '@material-ui/icons'

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

function App() {
  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
          <RoutedTabs
            tabClassName="nav-tab"
            activeTabClassName="active"
          >
            <NavTab to="/drinks"><LocalCafe /></NavTab>
            <NavTab to="/foods"><LocalDining /></NavTab>
            <NavTab to="/offers"><NewReleases /></NavTab>
          </RoutedTabs>

          <BottomDrawer />

          <Switch>
            <Route exact path="/" component={DrinksPage} />
            <Route path="/drinks" component={DrinksPage} />
            <Route path="/foods" component={FoodsPage} />
            <Route path="/offers" component={OffersPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
    </Provider>
  );
}

export default App;
