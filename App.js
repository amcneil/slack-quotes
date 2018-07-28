import React from 'react';
import styled from 'styled-components';
import { ScrollView } from './node_modules/react-native-gesture-handler';
import { Header, UserCard } from './src/components';
import people from './src/util/people';



const ScreenContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
  padding-top: 24px;
`

export default class App extends React.Component {
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
