import { List, Button, Checkbox } from 'antd'
import Header from '../Header/index'
import Footer from '../Footer/index'
import { useSelector } from 'react-redux'
const TodoList = () => {
  const { todoList } = useSelector((state) => state.todos)
  console.log(todoList)
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
              <Button type="link">编辑</Button>,
              <Button type="link">删除</Button>,
            ]}
          >
            <Checkbox style={{ marginRight: '10px' }} />
            {item}
          </List.Item>
        )}
      />
    </>
  )
}

export default TodoList
