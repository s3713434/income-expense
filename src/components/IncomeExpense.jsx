import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext)
  const [money, setMoney] = useState({
    income: 0,
    expense: 0,
  })

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount)
    // console.log('incomeAmount:' + amounts)
    // const income = amounts.filter((amount) => amount > 0)
    // console.log('incomes:' + income)
    // const expense = amounts.filter((amount) => amount < 0)
    // console.log('expense:' + expense)
    // const initialVal = 0
    // const amountIncome = income.reduce((acc, item) => acc + item, initialVal)
    // const amountexpense = expense.reduce((acc, item) => acc + item, initialVal)
    // setMoney({ income: amountIncome, expense: amountexpense })
    const { income, expense } = amounts.reduce(
      (acc, cur) => {
        cur > 0 ? (acc.income += cur) : (acc.expense += cur)
        return acc
      },
      {
        income: 0,
        expense: 0,
      }
    )
    setMoney({ income: income.toFixed(2), expense: (expense * -1).toFixed(2) })
    console.log(money)
  }, [transactions])

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          ${money.income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          ${money.expense}
        </p>
      </div>
    </div>
  )
}
