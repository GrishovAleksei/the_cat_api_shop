import {
    all, call, takeLatest, put
  } from 'redux-saga/effects';
  import {
    FETCH_BREEDS_REQUEST,
    FETCH_BREEDS_SUCCESS,
  } from './constants';
  import apiService from '../../api';
  
  export const fetchBreedsRequestSaga = function* () {
    try {
      const request = yield call(apiService.fetchBreeds);
      yield put({
        type: FETCH_BREEDS_SUCCESS,
        payload: { breeds: request.data }
      });
    } catch (error) {
      console.log('FETCH_BREEDS_REQUEST_ERROR', error);
    }
  };
  
  export function* saga() {
    yield all([
      takeLatest(FETCH_BREEDS_REQUEST, fetchBreedsRequestSaga),
    ]);
  }
  