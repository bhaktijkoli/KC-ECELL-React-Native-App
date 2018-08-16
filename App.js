import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from "native-base";

import Login from './app/screens/Login/Login'
import Register from './app/screens/Register/Register'

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

const AppNavigator = StackNavigator({
  Login: { screen: Login, },
  Register: { screen: Register, },
});
