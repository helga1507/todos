import {GET_TODOS_SUCCESS, GET_TODOS_REQUEST, GET_TODOS_FAILURE, CHANGE_NEW_TODO, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS} from '../actions'


const initialState = {
  list: [],
  newTodo: '',
  isLoad: false,
  error: null
};

export default function (state=initialState, {type, payload}) {
  switch (type) {
    case GET_TODOS_REQUEST:
      return {...state, isLoad: true};

    case GET_TODOS_SUCCESS:
      return {...state, list: payload, isLoad: false, error: null};

    case GET_TODOS_FAILURE:
      return {...state, isLoad: false, error: payload};

    case CHANGE_NEW_TODO:
      return {...state, newTodo: payload};

    case ADD_TODO_SUCCESS:
      return {...state, list: [...state.list, payload], newTodo: ''};

    case DELETE_TODO_SUCCESS: {
      const updatedList = [...state.list];

      updatedList.splice(payload.index,1);

      return {...state, list: updatedList, newTodo: ''};
    }

    default:
      return state;
  }
}

export const getList = state => state.todos.list;
export const getIsLoad = state => state.todos.isLoad;
export const getError = state => state.todos.error;
export const getNewTodo = state => state.todos.newTodo;