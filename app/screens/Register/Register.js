import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Button, Spinner, Text } from 'native-base';
import { Form, Item, Label, Input } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import Styles from './../../styles/styles';

class Register extends Component {
  static navigationOptions = {
    title: "Register",
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return(
      <LinearGradient colors={['#fdfbfb', '#ebedee']} style={Styles.fullscreen}>
        <Content style={{marginTop:10}}>
          <Form>
            <Item floatingLabel style={Styles.input}>
              <Label>Fullname</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Password Confirm</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Position</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Branch</Label>
              <Input />
            </Item>
            <Button block style={[Styles.button, Styles.primary]}>
              <Text style={Styles.primary}>Register</Text>
            </Button>
          </Form>
        </Content>
      </LinearGradient>
    )
  }
}

export default Register;
