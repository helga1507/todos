import {takeLatest, call, put, select} from 'redux-saga/effects'
import {ADD_TODO_REQUEST, addTodoFailure, addTodoSuccess} from '../actions'
import {getNewTodo} from '../reducers'
import {sendRequest} from '../../../core/api'

function* addTodo() {
  try{
    const todo = yield select(getNewTodo);
    const data = yield call(sendRequest, {url: '/api/addTodo', method: 'post', data: {todo}});

    yield put(addTodoSuccess(data));
  }
  catch (e) {
    yield put(addTodoFailure('Произошла ошибка при добавлении данных'))
  }
}

export default function* () {
  yield takeLatest(ADD_TODO_REQUEST, addTodo);
}