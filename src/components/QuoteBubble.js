import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'react-native-elements'

const BubbleRectangle = styled.View`
  background-color: lightblue;
  border-radius: 10px;
  align-self: center;
  margin: 30px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const BubbleText = styled.Text`
  font-size: 25px;
  width: 80%;
`;

const QuoteBubble = (props) => (
  <BubbleRectangle>
      <Icon
        name='format-quote-open'
        type='material-community'
        color='#517fa4'
        containerStyle={{flexBasis: 'auto', alignSelf: 'flex-start'}}
      />
    <BubbleText>
      {props.quote}
    </BubbleText>
      <Icon
        name='format-quote-close'
        type='material-community'
        color='#517fa4'
        containerStyle={{flexBasis: 'auto', alignSelf: 'flex-end'}}
      />
      <Icon
        name='triangle-down'
        type='entypo'
        size={48}
        color='#ADD8E6'
        containerStyle={{position: 'absolute', bottom: -37, right: 60}}
      />
  </BubbleRectangle>
);

export default QuoteBubble;
