import { createSlice } from '@reduxjs/toolkit'

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
      state.todoList = [
        ...state.todoList,
        {
          id: +new Date(),
          content: action.payload,
          isFinished: false
        }
      ]
    },
    editTodo(state, action) {
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.payload.id ? { ...todo, content: action.payload.content, isFinished: action.payload.isFinished } : todo
        ),
      }
    },
    delTodo(state, action) {
      return {
        ...state,
        todoList: state.todoList.filter(it => it.id !== action.payload)
      }
    },
    clearFinished(state) {
      return {
        ...state,
        todoList: state.todoList.filter(it => !it.isFinished)
      }
    },
    changeStatus(state, action) {
      state.status = action.payload
    },
  }
})



// 获取reducer函数
const todoReducer = todoStore.reducer

// 解构出actionCreater
export const { addTodo, editTodo, delTodo, clearFinished, changeStatus, undo, redo } = todoStore.actions

export default todoReducer
