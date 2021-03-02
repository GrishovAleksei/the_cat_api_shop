import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Circle({ children, focused }) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}} end={{x: 1, y: 1}}
      colors={[focused ? '#CBCBE0': '#FFFFFF', 'rgba(255, 255, 255, 0)', '#FFFFFF']}
      style={[styles.wrapper, focused ? null : styles.shadow]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'rgba(170, 170, 204, 0.5)',
    shadowRadius: 20,
    shadowOffset: {
      height: 10,
      width: 10
    },
    elevation: 10,
  }
});
