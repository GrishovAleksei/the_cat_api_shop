import {
  FETCH_FAVOURITES_SUCCESS,
  POST_FAVOURITE_BREED_SUCCESS,
} from './constants'

const initialState = {
  favourites: [],
  subId: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVOURITES_SUCCESS:
      return {
        ...state,
        favourites: action.payload.favourites,
      };
    case POST_FAVOURITE_BREED_SUCCESS:
      return {
        ...state,
        subId: action.payload?.subId
      }
    default:
      return state
  }
};

export const favouritesSelector = (state) => state.favourites.favourites
export const subIdSelector = (state) => state.favourites.subId
