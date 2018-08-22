import React, { Component } from 'react';
import { Image } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Home from './../Home/Home'
import Members from './../Members/Members'

import Sidebar from './../../components/Sidebar'

let navigationOptions = {
  headerStyle: {
    backgroundColor: '#22A7F0',
  },
  headerTintColor: '#FFF',
}


export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return(
      <AppNavigator />
    )
  }
}

const HomeNavigator = StackNavigator({
  Home: {screen: Home},
  Members: {screen: Members},
},{navigationOptions: navigationOptions});

const AppNavigator = DrawerNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: props => <Sidebar {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
)
