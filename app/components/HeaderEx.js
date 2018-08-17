import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Header, Body, Left, Right, Button, Icon, Title } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

import Styles from './../styles/styles';

export default class HeaderEx extends Component {
  render() {
    return (
      <Header hasTabs>
        <Left>
          <Button transparent>
            <Icon name="bars" onPress={() => this.props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title style={Styles.white}>{this.props.title}</Title>
        </Body>
        <Right></Right>
      </Header>
    );
  }
}
