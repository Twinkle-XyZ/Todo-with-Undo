import { Form, Input, Button } from 'antd'
import './index.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/modules/todos'

const AddTodo = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const onFinish = ({ content }) => {
    console.log('values', content)
    dispatch(addTodo(content))
    form.resetFields()
  }
  return (
    <div className="add-container">
      <Form className="add-todo" form={form} onFinish={onFinish}>
        <Form.Item name="content">
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
