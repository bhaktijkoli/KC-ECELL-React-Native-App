import React, { Component } from 'react';
import { Text, Spinner } from 'native-base';

class ButtonText extends Component {
  render() {
    if(this.props.loading == false) {
      return (
        <Text>{this.props.value}</Text>
      )
    }
    return(
      <Spinner color={this.props.color}/>
    )
  }
}

export default ButtonText;
