import React from 'react';
import styled from 'styled-components';
import { QuoteBubble, Avatar } from '../components';

const CloseButton = styled.Text`
  padding-top: 50px;
  align-self: flex-start;
`
const QuoteScreenContainer = styled.View`
  align-items: center;
`

class Quote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const person = this.props.navigation.getParam('person')
    return (
      <QuoteScreenContainer>
        <CloseButton onPress={() => this.props.navigation.navigate('Home')}>Close</CloseButton>
        <QuoteBubble quote="This is a longer sentence of a test quote from Slack that we might eventually get." />
        <Avatar person={person} onPress={ () => console.log('reload quote')} />
      </QuoteScreenContainer>
    );
  }
}

export default Quote;