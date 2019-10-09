import React from 'react';
import styled from 'styled-components';
import { QuoteBubble, Avatar } from '../components';
import quotes from '../util/quotes';
import { random } from 'lodash';

const CloseButton = styled.Text`
  margin-top: 50px;
  margin-left: 5px;
  align-self: flex-start;
  background: #7db1db;
  border-radius: 5px;
  padding: 10px;
`
const QuoteScreenContainer = styled.View`
  align-items: center;
`

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      quote: null,
      person: {}
    }
  }

  componentDidMount() {
    const person = this.props.navigation.getParam('person')
    const personQuotes = quotes[person.name.toLowerCase()]
    // console.log(personQuotes)
    this.setState({
      quotes: personQuotes,
      person: person,
    });

  }

  randomQuote(quotes) {
    const randomQuoteNumber = random(quotes.length)
    return quotes[randomQuoteNumber]
  }

  shuffleQuotes() {
    this.setState({
      quote: this.randomQuote(this.state.quotes)
    })
  }
  render() {
    // const quote = this.props.navigation.getParam('quote')
    // console.log(this.state.quotes)
    return (
      <QuoteScreenContainer>
        <CloseButton onPress={() => this.props.navigation.navigate('Home')}>Back</CloseButton>
        {this.state.quote && (
          <QuoteBubble quote={this.state.quote.text} />
        )}
        <Avatar person={this.state.person} onPress={ () => this.shuffleQuotes()} />
      </QuoteScreenContainer>
    );
  }
}

export default Quote;