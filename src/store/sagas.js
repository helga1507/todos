import {all, fork} from 'redux-saga/effects'

import todos from './todo/sagas'

export default function* () {
  yield all([
    fork(todos)
  ])
}