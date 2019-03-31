export const createAction = action => (payload={}) => ({ type: action, payload });

/** START LIST TODOS **/

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const getTodosRequest = createAction(GET_TODOS_REQUEST);

export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const getTodosSuccess = createAction(GET_TODOS_SUCCESS);

export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
export const getTodosFailure = createAction(GET_TODOS_FAILURE);


/** END LIST TODOS **/

export const CHANGE_NEW_TODO = 'CHANGE_NEW_TODO';
export const changeNewTodo = createAction(CHANGE_NEW_TODO);


/** START ADD  **/
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const addTodoRequest = createAction(ADD_TODO_REQUEST);

export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
export const addTodoFailure = createAction(ADD_TODO_FAILURE);

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS);

/** END ADD  **/

/** START DELETE  **/

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const deleteTodoRequest = createAction(DELETE_TODO_REQUEST);

export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';
export const deleteTodoFailure = createAction(DELETE_TODO_FAILURE);

export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const deleteTodoSuccess = createAction(DELETE_TODO_SUCCESS);

/** END DELETE  **/
