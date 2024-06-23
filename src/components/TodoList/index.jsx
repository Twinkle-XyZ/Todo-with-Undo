import { List, Button, Checkbox, Popconfirm } from 'antd'
import Header from '../Header/index'
import Footer from '../Footer/index'
import { useDispatch, useSelector } from 'react-redux'
import { delTodo } from '../../store/modules/todos'

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todos)
  console.log(todoList)
  const dispatch = useDispatch()
  const edit = () => {}
  const del = (id) => {
    dispatch(delTodo(id))
  }
  return (
    <>
      <List
        size="large"
        className="add-container"
        header={<Header />}
        footer={<Footer />}
        bordered
        dataSource={todoList}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="link" onClick={edit}>
                编辑
              </Button>,

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
            {item.content}
          </List.Item>
        )}
      />
    </>
  )
}

export default TodoList
