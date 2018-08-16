import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from "native-base";

import { Provider } from "react-redux"
import store from "./app/store";

import Login from './app/screens/Login/Login'
import Register from './app/screens/Register/Register'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}

const AppNavigator = StackNavigator({
  Login: { screen: Login, },
  Register: { screen: Register, },
});
