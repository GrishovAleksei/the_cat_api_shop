/* eslint-disable react/prop-types */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View
} from 'react-native'
import Title from './UI/Title'
import Subtitle from './UI/Subtitle'
import Colors from '../constants/colors'

export default function Card({ breed, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow]}
      onPress={() => onPress(breed)}
    >
      <View style={styles.columnLeft}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: breed.image?.url,
          }}
        />
      </View> 
      <View style={styles.columnRight}>
        <Title title={breed.name} />
        <Subtitle title={breed.description.slice(0, 60)+'...'} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 12,
    height: 130,
    borderRadius: 16,
    backgroundColor: Colors.subPrimary,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  columnLeft: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  columnRight: {
    flex: 2,
    margin: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})
