import { List, Button, Checkbox } from 'antd'
import Header from '../Header/index'
import Footer from '../Footer/index'
const TodoList = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
  return (
    <>
      <List
        size="large"
        className="add-container"
        header={<Header />}
        footer={<Footer />}
        bordered
        dataSource={data}
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
