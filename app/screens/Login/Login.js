import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Button, Spinner, Text, Toast } from 'native-base';
import { Form, Item, Label, Input } from 'native-base';
import { connect } from "react-redux"
import LinearGradient from 'react-native-linear-gradient';
import Zeroconf from 'react-native-zeroconf';

import Styles from './../../styles/styles';
import Request from './../../utils/request';

import ButtonText from './../../components/ButtonText';

import Auth from './../../actions/authActions'

class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      found: false,
      process: false,
      email: 'bhk@g.com',
      password: '12345',
    }
  }
  componentDidMount() {
    this.props.dispatch(Auth.setTopNavigation(this.props.navigation));
    Auth.getToken().then(token=>{
      if(token.length > 10) {
        this.doGetUserData(token);
      } else {
        this.setState({found:true});
      }
    }).catch(res=>{
      this.setState({found:true});
    })
    const zeroconf = new Zeroconf();
    zeroconf.scan(type = 'kcecell', protocol = 'tcp', domain = 'local.');
    zeroconf.on('start', () => console.log('The scan has started.'));
    zeroconf.on('stop', () => console.log('The scan has stopped.'));
    zeroconf.on('resolved', (data)=>{
      console.log("Found ", data);
      var ipaddress = data.addresses[0];
      var port = data.port;
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
            <Label>Email</Label>
            <Input value={this.state.email} onChangeText={value=>this.setState({'email':value,'username':value})}/>
          </Item>
          <Item floatingLabel style={Styles.input}>
            <Label>Password</Label>
            <Input value={this.state.password} onChangeText={value=>this.setState({'password':value})}/>
          </Item>
          <Button block style={[Styles.button, Styles.primary]} onPress={this.handleLogin.bind(this)}>
            <ButtonText value="Login" loading={this.state.process} color="#FFF"/>
          </Button>
          <Button transparent block style={Styles.button} onPress={this.doRegister.bind(this)}>
            <Text style={Styles.primaryText}>Register</Text>
          </Button>
        </Form>
      </Content>
    )
  }
  handleLogin() {
    this.setState({process:true});
    Request.post('/api/user/login', this.state).then(res=>{
      if(res.data.success) {
        let token = res.data.token;
        Auth.saveToken(token);
        this.doGetUserData(token);
      } else {
        Toast.show({text:"Invalid email and password.", buttonText:"Ok"});
        this.setState({process:false});
      }
    }).catch(res=>{
      console.log(res.response);
      this.setState({process:false});
    });
  }
  doRegister() {
    this.props.navigation.navigate("Register");
  }
  doGetUserData(token) {
    Request.setToken(token);
    Request.get('/api/user/').then(res=>{
      let user = res.data.user;
      let data = {token, user};
      this.doLogin(data);
    }).catch(res=>{
      console.log(res.response);
      this.setState({process:false});
    })
  }
  doLogin(data) {
    console.log(data);
    this.props.dispatch(Auth.setData(data));
    this.props.navigation.navigate("Home");
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Login);
