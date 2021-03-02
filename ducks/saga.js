import { all } from 'redux-saga/effects';
import { saga as breedsSaga } from './breeds/saga';
import { saga as favouritesSaga } from './favourites/saga';
import { saga as imagesSaga } from './images/saga';

export default function* rootSaga() {
  yield all([
    breedsSaga(),
    favouritesSaga(),
    imagesSaga(),
  ]);
}
