import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, View, Button, Text, Icon } from 'native-base';
import { connect } from "react-redux"

import HeaderEx from './../../components/HeaderEx'
import Styles from './../../styles/styles';

class Home extends Component {
  static navigationOptions = {
    header:null,
  }
  render() {
    return(
      <Container>
        <HeaderEx navigation={this.props.navigation} title="Home"/>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Home);
