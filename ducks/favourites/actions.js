import {
  FETCH_FAVOURITES_REQUEST,
  POST_FAVOURITE_BREED_REQUEST,
} from './constants';

export const fetchFavouritesRequest = () => ({
  type: FETCH_FAVOURITES_REQUEST,
});

export const postFavouriteRequest = (imageId) => ({
  type: POST_FAVOURITE_BREED_REQUEST,
  payload: imageId
})
