import {takeLatest, call, put} from 'redux-saga/effects'
import {DELETE_TODO_REQUEST, deleteTodoFailure, deleteTodoSuccess} from '../actions'
import {sendRequest} from '../../../core/api'

function* deleteTodo({payload}) {
  try{
    const data = yield call(sendRequest, {url: '/api/deleteTodo', method: 'post', data: {id: payload.id}});

    yield put(deleteTodoSuccess(data));
  }
  catch (e) {
    yield put(deleteTodoFailure('Произошла ошибка при удалении'))
  }
}

export default function* () {
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
}