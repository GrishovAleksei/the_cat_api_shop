import {
    all, call, takeLatest, put
  } from 'redux-saga/effects';
  import {
    FETCH_FAVOURITES_REQUEST,
    FETCH_FAVOURITES_SUCCESS,
    POST_FAVOURITE_BREED_REQUEST,
    POST_FAVOURITE_BREED_SUCCESS,
  } from './constants';
  import apiService from '../../api';
  const subId = 'AlexDemo2021'

  export const fetchFavouritesRequestSaga = function* () {
    try {
      const request = yield call(apiService.fetchFavourites, subId);
      yield put({
        type: FETCH_FAVOURITES_SUCCESS,
        payload: { favourites: request.data }
      });
    } catch (error) {
    console.log('FETCH_FAVOURITES_REQUEST_ERROR', error);
    }
  };

  export const postFavouriteBreedRequestSaga = function* ({ payload }) {
    const data = {
      image_id: payload,
	    sub_id: subId
    }
    console.log(data)
    try {
      const request = yield call(apiService.postFavourites, data);
      console.log('REQUEST ----> ', request.data)
      yield put({
        type: POST_FAVOURITE_BREED_SUCCESS,
        payload: request.data.id
      });
    } catch (error) {
    console.log('POST_FAVOURITE_BREED_REQUEST_ERROR', error);
    }
  }
  
  export function* saga() {
    yield all([
      takeLatest(FETCH_FAVOURITES_REQUEST, fetchFavouritesRequestSaga),
      takeLatest(POST_FAVOURITE_BREED_REQUEST, postFavouriteBreedRequestSaga)
    ]);
  }
  