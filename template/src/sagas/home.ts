import { all, takeLatest, put } from 'redux-saga/effects';
import { ADD_TODO_THINGS, ADD_TODO_THINGS_EXECUTE } from 'constants/actionTypes/home';

export default function* homeWatcher() {
  yield all([
    takeLatest(ADD_TODO_THINGS, addTodoThings)
  ]);
}

function* addTodoThings({ payload }: any) {
  console.log(payload);
  yield put({
    type: ADD_TODO_THINGS_EXECUTE,
    payload
  })
}