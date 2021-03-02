import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Image, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { postFavouriteRequest } from '../ducks/favourites/actions'
import HeaderNavigation from '../components/UI/NavBar'
import Title from '../components/UI/Title'
import Subtitle from '../components/UI/Subtitle'
import Button from '../components/UI/Button'
import Colors from '../constants/colors'
import { DEVICE_WIDTH, isIphone } from '../constants/values'

function BreedScreen(props) {
  const {
    route,
    navigation,
    postFavouriteRequest: postFavourite,
  } = props
  const { breed } = route.params 
  const subscribe = () => {
    console.warn(breed.image.id)
    postFavourite(breed.image.id)
  }
  const onBackPress = () => navigation.goBack()
  return (
    <HeaderNavigation onBackPress={onBackPress}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.imageWrapper, styles.shadow]}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{
              uri: breed.image.url,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 31 }}>
          <Title title={breed.name} margin={15} />
          <Subtitle
            title={breed.description}
            margin={15}
          />
        </View>
        <View style={styles.row}>
          <Button title="Другие фото" onPress={() => console.log('a')} />
          <Button title="Добавить в избранное" onPress={subscribe} />
        </View>
      </ScrollView>
    </HeaderNavigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
    paddingTop: isIphone ? STATUS_BAR : 0
  },
  imageWrapper: {
    margin: 25,
    height: DEVICE_WIDTH - 50,
    borderRadius: 16,
    backgroundColor: Colors.subPrimary,
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
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 31,
    marginTop: 31,
  }
});

export default connect((state) => ({
 
}), {
  postFavouriteRequest,
})(BreedScreen);
