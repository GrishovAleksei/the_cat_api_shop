import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity
} from 'react-native';
import Colors from '../../constants/colors'

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginRight: 14,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 14,
    color: Colors.primary,
    marginVertical: 10,
    marginHorizontal: 15,
    fontStyle: 'normal',
    fontWeight: '800'
  }
});
