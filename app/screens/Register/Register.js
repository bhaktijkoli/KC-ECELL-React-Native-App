import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Button, Spinner, Text, Toast } from 'native-base';
import { Form, Item, Label, Input } from 'native-base';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

import Styles from './../../styles/styles';
import Route from './../../utils/route';

import ButtonText from './../../components/ButtonText';

class Register extends Component {
  static navigationOptions = {
    title: "Register",
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullname: '',
      email: '',
      password: '',
      password_conf: '',
      position: '',
      branch: '',
      mobile_number: '',
      process: '',
    };
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
              <Input value={this.state.fullname} onChangeText={value=>this.setState({'fullname':value})}/>
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={value=>this.setState({'email':value,'username':value})}/>
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Password</Label>
              <Input value={this.state.password} onChangeText={value=>this.setState({'password':value})}/>
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Password Confirm</Label>
              <Input value={this.state.password_conf} onChangeText={value=>this.setState({'password_conf':value})}/>
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Position</Label>
              <Input value={this.state.position} onChangeText={value=>this.setState({'position':value})}/>
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Branch</Label>
              <Input value={this.state.branch} onChangeText={value=>this.setState({'branch':value})}/>
            </Item>
            <Item floatingLabel style={Styles.input}>
              <Label>Phone Number</Label>
              <Input value={this.state.mobile_number} onChangeText={value=>this.setState({'mobile_number':value})}/>
            </Item>
            <Button block style={[Styles.button, Styles.primary]} onPress={this.handleRegister.bind(this)}>
              <ButtonText value="Register" loading={this.state.process} color="#FFF"/>
            </Button>
          </Form>
        </Content>
      </LinearGradient>
    )
  }
  handleRegister() {
    this.setState({process:true});
    axios.post(Route('/api/users'), this.state).then(res=>{
      if(res.data.success) {
        Toast.show({text:"Registration successfull!", buttonText:"Ok"});
        this.props.navigation.navigate("Login");
      } else {
        Toast.show({text:res.data.msg, buttonText:"Ok"});
      }
      this.setState({process:false});
    }).catch(res=>{
      this.setState({process:false});
    });
  }
}

export default Register;
