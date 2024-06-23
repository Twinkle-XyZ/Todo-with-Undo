import { Button, Radio } from 'antd'
import { useState } from 'react'
import './index.css'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { useDispatch } from 'react-redux'
import { undo, redo } from '../../store/modules/todos'

const options = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Active',
    value: 'Active',
  },
  {
    label: 'Completed',
    value: 'Completed',
  },
]
const Header = () => {
  const [value4, setValue4] = useState('Apple')
  const onChange = ({ target: { value } }) => {
    console.log('radio4 checked', value)
    setValue4(value)
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
          value={value4}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className="clear">
        <Button type="link">Clear</Button>
      </div>
    </div>
  )
}

export default Header
