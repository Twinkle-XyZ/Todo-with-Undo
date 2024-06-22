import { createSlice } from '@reduxjs/toolkit'

const todoStore = createSlice({
  name: 'todo',
  // 数据状态
  initialState: {
    todoList: []
  },
  // 同步修改方法
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload)
    }
  }
})

// 解构出actionCreater
const { addTodo } = todoStore.actions

// 获取reducer函数
const todoReducer = todoStore.reducer

export { addTodo }

export default todoReducer