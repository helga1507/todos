import {takeLatest, call, put} from 'redux-saga/effects'
import {GET_TODOS_REQUEST, getTodosFailure, getTodosSuccess} from '../actions'
import {sendRequest} from '../../../core/api'

function* getTodos() {
  try{
    const data = yield call(sendRequest, {url: '/api/getTodos'});

    yield put(getTodosSuccess(data));
  }
  catch (e) {
    yield put(getTodosFailure('Произошла ошибка при получении данных'))
  }
}

export default function* () {
  yield takeLatest(GET_TODOS_REQUEST, getTodos);
}