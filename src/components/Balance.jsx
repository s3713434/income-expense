import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

export default function Balance() {
  const { transactions } = useContext(GlobalContext)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount)
    console.log('amounts:' + amounts)
    const totalAmounts = amounts
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)
    setTotal(totalAmounts)
  }, [transactions])
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </div>
  )
}
