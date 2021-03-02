import {
  FETCH_RANDOM_IMAGE_SUCCESS,
  REMOVE,
} from './constants'

const initialState = {
  randomImage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_IMAGE_SUCCESS:
      return {
        randomImage: action.payload.image,
      };
    case REMOVE:
      return {
        randomImage: null
      }
    default:
      return state
  }
};

export const randomImageSelector = (state) => state.images.randomImage
