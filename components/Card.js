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
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: breed.image?.url,
          }}
        />
      </View> 
      <View style={{ flex: 2, margin: 16, flexDirection: 'column', justifyContent: 'space-between' }}>
        <Title title={breed.name} />
        <Subtitle title={'Taking care of a pet is my favorite, it helps me to...'} />
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
  shadow: {
    shadowColor: 'rgba(170, 170, 204, 0.5)',
    shadowRadius: 20,
    shadowOffset: {
      height: 10,
      width: 10
    },
    elevation: 10,
  }
})
