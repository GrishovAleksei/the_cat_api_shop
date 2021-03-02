import { FETCH_BREEDS_SUCCESS } from './constants'

const initialState = {
  breeds: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREEDS_SUCCESS:
      return {
        breeds: action.payload.breeds,
      };
    default:
      return state
  }
};

export const breedsSelector = (state) => state.breeds.breeds
