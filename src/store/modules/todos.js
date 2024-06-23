import { createSlice } from '@reduxjs/toolkit'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import undoable, { includeAction } from "redux-undo";

const todoStore = createSlice({
  name: 'todo',
  // 数据状态
  initialState: {
    todoList: [],
    past: [],
    future: []
  },
  // 同步修改方法
  reducers: {
    addTodo(state, action) {
      state.todoList.push({
        id: +new Date(),
        content: action.payload
      })
    },
    editTodo(state, action) {

    },
    delTodo(state, action) {
      console.log(action);
      return {
        ...state,
        todoList: state.todoList.filter(it => it.id !== action.payload)
      }
    },
  }
})



// 获取reducer函数
const todoReducer = todoStore.reducer

// const todoReducer = undoable(todoStore.reducer);
// 解构出actionCreater
export const { addTodo, editTodo, delTodo } = todoStore.actions

export default todoReducer
// export default undoableTodoReducer
