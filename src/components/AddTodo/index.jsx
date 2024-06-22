import { Form, Input, Button } from 'antd'
import './index.css'

const AddTodo = () => {
  return (
    <div className="add-container">
      <Form className="add-todo">
        <Form.Item name="username">
          <Input className="todo-detail" size="large" placeholder="请输入" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddTodo
