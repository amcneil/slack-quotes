import React from 'react';
import styled from 'styled-components';
import { Text, View, ScrollView } from 'react-native';
import { QuoteBubble } from '../components';


const CloseButton = styled.Text`
  padding-top: 50px;
`

class Quote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <CloseButton onPress={() => this.props.navigation.navigate('Home')}>Close</CloseButton>
        <QuoteBubble quote="This is a longer sentence of a test quote from Slack that we might eventually get." />
      </View>
    );
  }
}

export default Quote;