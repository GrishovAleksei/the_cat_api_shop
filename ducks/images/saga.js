import {
    all, call, takeLatest, put
} from 'redux-saga/effects';
import {
  FETCH_RANDOM_IMAGE_REQUEST,
  FETCH_RANDOM_IMAGE_SUCCESS
} from './constants';
import apiService from '../../api';

export const fetchRandomImageRequestSaga = function* ({ payload }) {
  const breedId = payload
  try {
    const request = yield call(apiService.fetchRandomImage, breedId);
    yield put({
      type: FETCH_RANDOM_IMAGE_SUCCESS,
      payload: { image: request.data[0] }
    });
  } catch (error) {
  console.log('FETCH_RANDOM_IMAGE_REQUEST_ERROR', error);
  }
};

export function* saga() {
  yield all([
    takeLatest(FETCH_RANDOM_IMAGE_REQUEST, fetchRandomImageRequestSaga),
  ]);
}
  