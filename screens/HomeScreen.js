import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { fetchBreedsRequest } from '../ducks/breeds/actions'
import { breedsSelector } from '../ducks/breeds/reducers'
import Card from '../components/Card'
import Colors from '../constants/colors'
import { isIphone } from '../constants/values'

function HomeScreen(props) {
  const {
    breeds,
    navigation,
    fetchBreedsRequest: fetchBreeds,
  } = props;

  useEffect(() => {
    navigation.addListener('focus', fetchBreeds)
  }, [navigation])

  const onPressHandler = (breed) => {
    navigation.navigate('BreedScreen', { breed })
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: '23%' }}
      showsVerticalScrollIndicator={false}
    >
      {breeds.length
        ? breeds.map((breed, index) => 
            <Card breed={breed} key={index} onPress={onPressHandler} />)
        : <ActivityIndicator size="large" color={Colors.primary} />
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
    paddingTop: isIphone ? STATUS_BAR : 0
  },
});

export default connect((state) => ({
  breeds: breedsSelector(state),
}), {
  fetchBreedsRequest,
})(HomeScreen);
