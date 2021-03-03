import React from 'react';
import {
  Text, StyleSheet
} from 'react-native';

export default function Subtitle({ title, margin }) {
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
    fontSize: 14,
    fontWeight: '500',
    color: '#4F4F4F',
  }
});
