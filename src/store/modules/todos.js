import { createSlice } from '@reduxjs/toolkit'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import undoable, { includeAction } from "redux-undo";

const todoStore = createSlice({
  name: 'todo',
  // 数据状态
  initialState: {
    todoList: [],
    status: 'All'
  },
  // 同步修改方法
  reducers: {
    addTodo(state, action) {
      state.todoList.push({
        id: +new Date(),
        content: action.payload,
        isFinished: false
      })
    },
    editTodo(state, action) {
      console.log('action', action);
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
        ),
      }
    },
    delTodo(state, action) {
      return {
        ...state,
        todoList: state.todoList.filter(it => it.id !== action.payload)
      }
    },
    changeStatus(state, action) {
      state.status = action.payload
    }
  }
})



// 获取reducer函数
const todoReducer = todoStore.reducer

// const todoReducer = undoable(todoStore.reducer);
// 解构出actionCreater
export const { addTodo, editTodo, delTodo, changeStatus } = todoStore.actions

export default todoReducer
// export default undoableTodoReducer
