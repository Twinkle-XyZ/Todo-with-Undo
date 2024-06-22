import { Button, Radio } from 'antd'
import { useState } from 'react'
import './index.css'

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
  return (
    <div className="handle">
      <div className="set-reset">
        <Button type="link">Undo</Button>
        <Button type="link">Redo</Button>
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
