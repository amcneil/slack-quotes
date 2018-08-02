import React from 'react';
import { Card } from 'react-native-elements'
import styled from 'styled-components';
import { Avatar } from './index';

const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const UserCard = ({ person, navigation}) => {
  const navigateToQuoteScreen = () => navigation.navigate('Quote', {person});
  return (
    <Card containerStyle={{ padding: 10, width: '95%', justifyContent: 'center', alignItems: 'center' }} >
      <Avatar
        person={person}
        onPress={navigateToQuoteScreen}
      />
      <UserName>{person.name}</UserName>
    </Card>
  )
}

export default UserCard;
