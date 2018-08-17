import React, { Component } from 'react';
import { StackNavigator, createDrawerNavigator } from 'react-navigation';
import { StyleProvider, Root } from "native-base";

import { Provider } from "react-redux"
import store from "./app/store";

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import Login from './app/screens/Login/Login'
import Register from './app/screens/Register/Register'
import Main from './app/screens/Main/Main'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={store}>
          <Root>
            <AppNavigator />
          </Root>
        </Provider>
      </StyleProvider>
    );
  }
}

const AppNavigator = StackNavigator({
  Login: { screen: Login, },
  Register: { screen: Register, },
  Home: { screen:Main},
});
