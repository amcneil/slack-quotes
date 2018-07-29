import React from 'react';
import styled from 'styled-components';
import { Text, ScrollView } from 'react-native'
import { Header, UserCard } from '../components';
import people from '../util/people';


const ScreenContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
  padding-top: 24px;
`

class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <ScreenContainer>
          <Header />
          {people.map(person => <UserCard person={person} thing="thing" key={person.name}/>)}
        </ScreenContainer>
      </ScrollView>
    );
  }
}

export default Home;