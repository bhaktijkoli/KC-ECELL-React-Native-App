import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './app/screens/Login/Login'
import Register from './app/screens/Register/Register'

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  Login: { screen: Login, },
  Register: { screen: Register, },
});
