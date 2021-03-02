import {
  FETCH_RANDOM_IMAGE_REQUEST,
  REMOVE,
} from './constants';

export const fetchRandomImageRequest = (breedId) => ({
  type: FETCH_RANDOM_IMAGE_REQUEST,
  payload: breedId,
})

export const removeTempImage = () => ({
  type: REMOVE,
})
