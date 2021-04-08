import React from 'react'
import './ToDoItem.css';
import { Checkbox } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const ToDoItem = ({ name, done, id }) => {
  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(setCheck(id))
  }
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'Checkbox A' }}>
      </Checkbox>
      <p className={done && 'todoItem--done'}>(name)</p>
    </div>
  )
}

export default ToDoItem
