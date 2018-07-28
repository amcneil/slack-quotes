import React from 'react';
import { Card, Avatar } from 'react-native-elements'
import styled from 'styled-components';

const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const UserCard = ({ person }) => {
  return (
    <Card containerStyle={{ padding: 10, width: '95%', justifyContent: 'center', alignItems: 'center' }} >
      <Avatar
        rounded
        xlarge
        source={{uri: person.avatar}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <UserName>{person.name}</UserName>
    </Card>
  )
}

export default UserCard;
