import { List, Button, Checkbox, Popconfirm, Input } from 'antd'
import Header from '../Header/index'
import Footer from '../Footer/index'
import { useDispatch, useSelector } from 'react-redux'
import { delTodo, editTodo } from '../../store/modules/todos'
import { useEffect, useState } from 'react'

const TodoList = () => {
  const { todoList, status } = useSelector((state) => state.todos.present)
  const [myList, setMyList] = useState(todoList)

  const getMyList = () => {
    if (status === 'All') setMyList(todoList)
    else if (status === 'Active')
      setMyList(todoList?.filter((it) => !it.isFinished))
    else setMyList(todoList?.filter((it) => it.isFinished))
  }
  useEffect(() => {
    getMyList()
  }, [status, todoList])
  const dispatch = useDispatch()
  const [editItemId, setEditItemId] = useState()
  const edit = (id, content) => {
    dispatch(editTodo({ id, content, isFinished: false }))
    setEditItemId(null)
  }
  const del = (id) => {
    dispatch(delTodo(id))
  }
  const toggleFinish = (id, content, isFinished) => {
    dispatch(editTodo({ id, content, isFinished: !isFinished }))
  }
  return (
    <>
      <List
        size="large"
        className="add-container"
        header={<Header />}
        footer={myList?.length > 0 && <Footer />}
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
            <Checkbox
              checked={item.isFinished}
              disabled={item.isFinished}
              onChange={() =>
                toggleFinish(item.id, item.content, item.isFinished)
              }
            />
            {editItemId === item.id ? (
              <Input
                style={{ marginLeft: '10px' }}
                defaultValue={item.content}
                onPressEnter={(e) => edit(item.id, e.target.value)}
                onBlur={() => setEditItemId(null)}
              />
            ) : (
              <span
                style={{
                  textDecoration: item.isFinished ? 'line-through' : 'none',
                }}
              >
                {item.content}
              </span>
            )}
          </List.Item>
        )}
      />
    </>
  )
}

export default TodoList
