import React, { useState } from 'react'
import './../components/counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'
const Counter = () => {
  // state for inputtext
  const [amount,setAmount]=useState(0)
// to access data from store to component
const {count}=useSelector(state=>state.counterReducer)
console.log(count)
// dispatch return fn so atinte argumentil action execute(look onclick)
const dispatch =useDispatch()
const handleIncreementAmount=()=>{
  if(amount){
// dispatch action with input amount
dispatch(incrementByAmount(amount))
  }else{
    alert("Please fill the form!!!!")
  }
}
  return (
    <div className='border rounded p-5 text-center'>
      <h1 style={{fontSize:'100px'}}>
       {count}
        </h1>
        <div style={{width:'500px'}} className='d-flex justify-content-between mt-5'>
           <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decreement</button>
           <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
           <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increement</button>

            </div> 
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <input onChange={e=>setAmount(e.target.value)}  placeholder="Input Increement Amount" className='form-control'  type="text" />
                <button onClick={handleIncreementAmount} className='btn btn-primary ms-3'>Increement By Amount</button>
                </div> 

    </div>
  )
}

export default Counter