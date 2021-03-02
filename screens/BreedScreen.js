/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Image, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { postFavouriteRequest } from '../ducks/favourites/actions'
import {
  fetchRandomImageRequest, removeTempImage
} from '../ducks/images/actions'
import { randomImageSelector } from '../ducks/images/reducers'
import HeaderNavigation from '../components/UI/NavBar'
import Title from '../components/UI/Title'
import Subtitle from '../components/UI/Subtitle'
import Button from '../components/UI/Button'
import Colors from '../constants/colors'
import { DEVICE_WIDTH } from '../constants/values'

function BreedScreen(props) {
  const {
    image,
    route,
    navigation,
    removeTempImage: unsubscribe,
    postFavouriteRequest: postFavourite,
    fetchRandomImageRequest: getRandomImage
  } = props
  const { breed } = route.params
  const [uri, setUri] = useState(null)
  useEffect(() => {
    setUri(image?.url || breed.image.url)
  },[image])
  const subscribe = () => postFavourite(image?.id || breed.image.id)
  const getRandomPhoto = () => getRandomImage(breed.id)
  const onBackPress = () => {
    navigation.goBack()
    unsubscribe()
  }
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
              uri: uri,
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
          <Button title="Другие фото" onPress={getRandomPhoto} />
          <Button title="Добавить в избранное" onPress={subscribe} />
        </View>
      </ScrollView>
    </HeaderNavigation>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    margin: 25,
    height: DEVICE_WIDTH - 50,
    borderRadius: 16,
    backgroundColor: Colors.subPrimary,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 31,
    marginTop: 31,
  }
});

export default connect((state) => ({
  image: randomImageSelector(state),
}), {
  removeTempImage,
  postFavouriteRequest,
  fetchRandomImageRequest,
})(BreedScreen);
