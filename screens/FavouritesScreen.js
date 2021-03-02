import React, { useEffect, useState } from 'react'
import {
  Image, View, StyleSheet, FlatList, ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { fetchFavouritesRequest } from '../ducks/favourites/actions'
import { favouritesSelector, subIdSelector } from '../ducks/favourites/reducers'
import Title from '../components/UI/Title'
import { DEVICE_WIDTH, isIphone } from '../constants/values'
import Colors from '../constants/colors';

function FavouritesScreen(props) {
  const {
    subId,
    favourites,
    navigation,
    fetchFavouritesRequest: fetchFavourites
  } = props
  console.log(subId, favourites)

  useEffect(() => {
    navigation.addListener('focus', fetchFavourites)
  }, [navigation])

  return (
    <FlatList
      data={favourites}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: '23%' }}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) =>
        <View style={styles.imageWrapper}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{
              uri: item.image?.url,
            }}
          />
        </View>
      }
      ListEmptyComponent={
        <ActivityIndicator size="large" color={Colors.primary} />
      }
    />
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
});

export default connect((state) => ({
  favourites: favouritesSelector(state),
  subId: subIdSelector(state),
}), {
  fetchFavouritesRequest
})(FavouritesScreen);
