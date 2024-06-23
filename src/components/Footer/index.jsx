import { Button, Checkbox } from 'antd'
import { useSelector } from 'react-redux'

const Footer = () => {
  const { todoList } = useSelector((state) => state.todos)
  const total = todoList?.length
  const finished = todoList?.filter((it) => it.isFinished)?.length

  return (
    <div className="total">
      共{total}件事项，已完成{finished}件，未完成{total - finished}件
    </div>
  )
}

export default Footer
