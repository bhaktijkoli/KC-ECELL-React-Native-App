import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

import Styles from './../../styles/styles';

class Home extends Component {
  render() {
    return(
      <Container style={Styles.container}>
        <Content>
          <Button>
            <Text>Click Me! </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Home;
