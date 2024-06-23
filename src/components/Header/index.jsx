import { Button, Radio, Popconfirm } from 'antd'
import { useState } from 'react'
import './index.css'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { useDispatch } from 'react-redux'
import { changeStatus, clearFinished } from '../../store/modules/todos'

const options = [
  {
    label: '全部',
    value: 'All',
  },
  {
    label: '未完成',
    value: 'Active',
  },
  {
    label: '已完成',
    value: 'Finished',
  },
]
const Header = () => {
  const [value, setValue] = useState('All')
  const onChange = ({ target: { value } }) => {
    setValue(value)
    dispatch(changeStatus(value))
  }
  const dispatch = useDispatch()
  const undoL = () => {
    dispatch(UndoActionCreators.undo())
  }
  const redoL = () => {
    dispatch(UndoActionCreators.redo())
  }
  const clear = () => {
    dispatch(clearFinished())
  }
  return (
    <div className="handle">
      <div className="set-reset">
        <Button type="link" onClick={undoL}>
          Undo
        </Button>
        <Button type="link" onClick={redoL}>
          Redo
        </Button>
      </div>
      <div className="filter">
        <Radio.Group
          options={options}
          onChange={onChange}
          value={value}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className="clear">
        <Popconfirm
          title="确认清除已完成的事项吗?"
          onConfirm={clear}
          okText="确认"
          cancelText="取消"
        >
          <Button type="link">清除已完成</Button>
        </Popconfirm>
      </div>
    </div>
  )
}

export default Header
