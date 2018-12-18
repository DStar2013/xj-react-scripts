import { all, fork } from 'redux-saga/effects';
import homeWatcher from './home';

export default function* rootSaga() {
  yield all([
    fork(homeWatcher)
  ]);
}