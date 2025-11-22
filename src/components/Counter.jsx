import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../store/slices/counterSlice';

export default function Counter() {


const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

  return (
    <div className=' h-24 *:m-5 bg-green-400'>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button>{count}</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={()=>{dispatch(incrementByAmount())}}>1</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}
