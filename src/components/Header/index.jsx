import { Button, Radio } from 'antd'
import { useState } from 'react'
import './index.css'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { useDispatch } from 'react-redux'
import { undo, redo, changeStatus } from '../../store/modules/todos'

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
    console.log('radio4 checked', value)
    setValue(value)
    dispatch(changeStatus(value))
  }
  const dispatch = useDispatch()
  const undoL = () => {
    console.log(111)
    dispatch(UndoActionCreators.undo())
  }
  const redoL = () => {
    console.log(222)
    dispatch(UndoActionCreators.redo())
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
        <Button type="link">清除已完成</Button>
      </div>
    </div>
  )
}

export default Header
