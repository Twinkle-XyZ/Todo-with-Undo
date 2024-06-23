import { List, Button, Checkbox, Popconfirm, Input } from 'antd'
import Header from '../Header/index'
import Footer from '../Footer/index'
import { useDispatch, useSelector } from 'react-redux'
import { delTodo, editTodo } from '../../store/modules/todos'
import { useEffect, useState } from 'react'

const TodoList = () => {
  const { todoList, status } = useSelector((state) => state.todos)
  console.log(todoList, status, 111)
  const [myList, setMyList] = useState(todoList)
  const getMyList = () => {
    console.log('666')
    if (status === 'All') setMyList(todoList)
    else if (status === 'Active')
      setMyList(todoList?.filter((it) => !it.isFinished))
    else setMyList(todoList?.filter((it) => it.isFinished))
  }
  useEffect(() => {
    getMyList()
  })
  const dispatch = useDispatch()
  const [editItemId, setEditItemId] = useState()
  const edit = (id, content) => {
    dispatch(editTodo({ id, content }))
    setEditItemId(null)
  }
  const del = (id) => {
    dispatch(delTodo(id))
  }
  return (
    <>
      <List
        size="large"
        className="add-container"
        header={<Header />}
        footer={myList.length > 0 && <Footer />}
        bordered
        dataSource={myList}
        renderItem={(item) => (
          <List.Item
            actions={[
              editItemId !== item.id ? (
                <Button type="link" onClick={() => setEditItemId(item.id)}>
                  编辑
                </Button>
              ) : (
                <Button type="link" onClick={() => edit(item.id, item.content)}>
                  保存
                </Button>
              ),
              <Popconfirm
                title="确认删除吗?"
                onConfirm={() => del(item.id)}
                okText="确认"
                cancelText="取消"
              >
                <Button type="link">删除</Button>,
              </Popconfirm>,
            ]}
          >
            <Checkbox style={{ marginRight: '10px' }} />
            {editItemId === item.id ? (
              <Input
                defaultValue={item.content}
                onPressEnter={(e) => edit(item.id, e.target.value)}
                onBlur={() => setEditItemId(null)}
              />
            ) : (
              item.content
            )}
          </List.Item>
        )}
      />
    </>
  )
}

export default TodoList
