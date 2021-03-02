import React from 'react';
import {
  Text, StyleSheet
} from 'react-native';

export default function Title({ title, margin }) {
  return (
    <Text
      style={{
        ...styles.title,
        marginVertical: margin || 0
      }}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Bold',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#333333'
  }
});
