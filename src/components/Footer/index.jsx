import { Button, Checkbox } from 'antd'
import { useSelector } from 'react-redux'

const Footer = () => {
  const { todoList } = useSelector((state) => state.todos)
  console.log('footer', todoList)
  const total = todoList?.length
  const finished = todoList?.filter((it) => it.isFinished)?.length
  console.log('footer', total, finished)

  return (
    <div className="total">
      <Checkbox style={{ marginRight: '10px' }} />共{total}
      件事，已完成{finished}件事，未完成{total - finished}件事
    </div>
  )
}

export default Footer
