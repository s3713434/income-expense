import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext)
  const onSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random()) * 100000000,
      text,
      amount: +amount,
    }
    addTransaction(newTransaction)
  }
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Text</label>
          <input
            type='text'
            value={text}
            placeholder='Enter text'
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label>Amount</label>
          <input
            type='number'
            value={amount}
            placeholder='Enter amount'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn' type='submit'>
          Add Transaction
        </button>
      </form>
    </div>
  )
}
