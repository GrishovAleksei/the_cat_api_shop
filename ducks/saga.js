import { all } from 'redux-saga/effects';
import { saga as breedsSaga } from './breeds/saga';
import { saga as favouritesSaga } from './favourites/saga';

export default function* rootSaga() {
  yield all([
    breedsSaga(),
    favouritesSaga(),
  ]);
}
