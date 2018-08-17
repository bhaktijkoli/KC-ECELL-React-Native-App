import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Separator } from 'native-base';
import { List, ListItem, Text, Icon, Body, Row } from 'native-base';
import { H3 } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from "react-redux"

import Auth from './../actions/authActions'
import Styles from './../styles/styles';

const listArray1 = [
  { label: 'Home',  icon: 'home', screen: 'Home' },
]
const listArray2 = [
  { label: 'Settings',  icon: 'cog', screen: 'Home' },
  { label: 'Help', icon: 'info-circle', screen: 'Home' },
  { label: 'Share', icon: 'share-alt', screen: 'Home' },
]

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <View style={{height:200}}>
          <Body style={{alignItems:'center',paddingRight:10,marginTop:20}}>
            <Image style={{height:150, width:150}} source={require('./../assets/kcecell.png')} />
            <H3>{this.props.auth.user.fullname}</H3>
          </Body>
        </View>
        <Content>
          <List dataArray={listArray1} itemDivider={false} button={true}
            renderRow={(item, secId, rowId) =>
              <ListItem
                button={true}
                noBorder={rowId!=listArray1.length-1}
                onPress={() => this.props.navigation.navigate(item.screen)} >
                <Row>
                  <Icon name={item.icon} style={{marginRight:10}}/>
                  <Text>{item.label}</Text>
                </Row>
              </ListItem>
            }>
          </List>
          <List dataArray={listArray2} itemDivider={false} button={true}
            renderRow={(item, secId, rowId) =>
              <ListItem
                button={true}
                noBorder={rowId!=listArray1.length-1}
                onPress={() => this.props.navigation.navigate(item.screen)} >
                <Row>
                  <Icon name={item.icon} style={{marginRight:10}}/>
                  <Text>{item.label}</Text>
                </Row>
              </ListItem>
            }>
          </List>
          <List itemDivider={false} button={true}>
            <ListItem
              button={true}
              noBorder={true}
              onPress={this.doLogout.bind(this)} >
              <Row>
                <Icon name="sign-out" style={{marginRight:10}}/>
                <Text>Logout</Text>
              </Row>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
  doLogout() {
    let data ={ token: "", user: ""}
    Auth.saveAuth(data);
    this.props.auth.topNavigation.navigate('Login');
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Sidebar);
