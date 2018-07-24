import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Button, Spinner, Text } from 'native-base';
import { Form, Item, Label, Input } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Zeroconf from 'react-native-zeroconf';

import Styles from './../../styles/styles';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      found: false,
    }
  }
  componentDidMount() {
    const zeroconf = new Zeroconf();
    zeroconf.scan(type = 'kcecell', protocol = 'tcp', domain = 'local.');
    zeroconf.on('start', () => console.log('The scan has started.'));
    zeroconf.on('stop', () => console.log('The scan has stopped.'));
    zeroconf.on('resolved', (data)=>{
      console.log("Found ", data);
      var ipaddress = data.addresses[0];
      var port = data.port;
      this.setState({found:true});
    });
  }
  render() {
    return(
      <LinearGradient colors={['#fdfbfb', '#ebedee']} style={Styles.fullscreen}>
        <Image
          style={{width: 200, height: 200, alignSelf:'center', marginTop:100}}
          source={require('./../../assets/kcecell.png')}
        />
        {this.getLoading()}
      </LinearGradient>
    )
  }
  getLoading() {
    if(this.state.found) return this.getForm();
    else return this.getSpinner();
  }
  getSpinner() {
    return <Spinner color="#2ecc71"/>
  }
  getForm() {
    return(
      <Content>
        <Form>
          <Item floatingLabel style={Styles.input}>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel style={Styles.input}>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button block style={[Styles.button, Styles.primary]}>
            <Text style={Styles.primary}>Login</Text>
          </Button>
          <Button transparent block style={Styles.button} onPress={this.doRegister.bind(this)}>
            <Text style={Styles.primaryText}>Register</Text>
          </Button>
        </Form>
      </Content>
    )
  }
  doRegister() {
    this.props.navigation.navigate("Register");
  }
}

export default Login;
