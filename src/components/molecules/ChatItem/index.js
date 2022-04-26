import React from 'react';
import {StyleSheet} from 'react-native';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe, date, text}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Other />;
};

export default ChatItem;

const styles = StyleSheet.create({});
