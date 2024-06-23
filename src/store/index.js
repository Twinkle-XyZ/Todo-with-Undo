import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./modules/todos"
import undoable from 'redux-undo';

const store = configureStore({
  reducer: {
    todos: undoable(todoReducer)
  }
})

export default store
