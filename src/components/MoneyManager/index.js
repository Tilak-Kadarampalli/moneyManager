import './index.css'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  render() {
    return (
      <div className="main-bg">
        <div className="main-banner">
          <div className="banner-text-cont">
            <h1 className="banner-head">Hi, Richard</h1>
            <p className="banner-desc">
              Welcome back to your
              <span className="banner-desc-main"> Money Manager</span>
            </p>
          </div>
        </div>

        <MoneyDetails />

        <div className="transaction-cont">
          <div className="transaction-input">
            <h1 className="transaction-head">Add Transaction</h1>
            <form className="transaction-form">
              <label className="label-texts" htmlFor="title">
                TITLE
              </label>
              <input id="title" type="text" className="input-cont" />
              <label className="label-texts" htmlFor="amount">
                AMOUNT
              </label>
              <input id="amount" type="text" className="input-cont" />
              <label className="label-texts" htmlFor="type">
                TYPE
              </label>
              <select id="type" className="input-cont" name="type">
                {transactionTypeOptions.map(eachOption => (
                  <option id={eachOption.id} value={eachOption.displayText}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-history">
            <h1 className="history-head">History</h1>
            <ul>
              <li className="history-table-head">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>Delete</p>
              </li>
              <TransactionItem />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
