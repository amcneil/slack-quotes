import React from 'react';
import { Avatar } from 'react-native-elements'

const SlackAvatar = ({ person, onPress }) => {

  return (
    <Avatar
      rounded
      xlarge
      source={{ uri: person.avatar }}
      onPress={onPress}
      activeOpacity={0.7}
    />
  );
};

export default SlackAvatar;