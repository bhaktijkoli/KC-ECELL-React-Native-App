import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, View, Button, Text, Icon } from 'native-base';
import { List, ListItem } from 'native-base';
import { Spinner } from 'native-base';
import { connect } from "react-redux"

import HeaderEx from './../../components/HeaderEx'
import Styles from './../../styles/styles';
import Request from './../../utils/request';


class Members extends Component {
  static navigationOptions = {
    header:null,
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
    }
    this.doGetList();
  }
  render() {
    return(
      <Container>
        <HeaderEx navigation={this.props.navigation} title="Members"/>
        {this.getContent()}
      </Container>
    )
  }
  getContent() {
    if(this.state.loading) return this.getSpinner();
    else return this.getList();
  }
  getSpinner() {
    return <Spinner color="#2ecc71"/>
  }
  getList() {
    return (
      <Content>
        <List dataArray={this.state.users}
          renderRow={(user) =>
            <ListItem>
              <Text>{user.fullname}</Text>
            </ListItem>
          }>
        </List>
      </Content>
    )
  }
  doGetList() {
    Request.get('/api/users').then(res=>{
      this.setState({
        users: res.data.users,
        loading: false,
      })
    }).catch(res=>{
      console.log(res.response);
    })
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Members);
