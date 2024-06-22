import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./modules/todos"

const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
})

export default store
