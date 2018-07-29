import React from 'react';
import styled from 'styled-components';
import { Text, ScrollView } from 'react-native'


const CloseButton = styled.Text`
  padding-top: 50px;
`

class Quote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CloseButton onPress={() => this.props.navigation.navigate('Home')}>Close</CloseButton>
    );
  }
}

export default Quote;