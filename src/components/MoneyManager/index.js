import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
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
const initialHistory = []

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',

    type: 'Income',
    income: 0,
    expenses: 0,
    history: initialHistory,
  }

  readTitle = event => {
    this.setState({title: event.target.value})
  }

  readAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  changeType = event => {
    this.setState({type: event.target.value})
  }

  updateMoneyDetails = event => {
    event.preventDefault()
    const {type, amount, title, history} = this.state
    if (type === 'Income') {
      this.setState(prevStatus => ({income: prevStatus.income + amount}))
    } else {
      this.setState(prevStatus => ({expenses: prevStatus.expenses + amount}))
    }

    const newItem = {id: uuidv4(), title, amount, type}

    this.setState(prevStatus => ({
      history: [...prevStatus.history, newItem],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  deleteTransaction = id => {
    const {history} = this.state
    const deleteItem = history.filter(
      eachTransaction => eachTransaction.id === id,
    )
    const {amount, type} = deleteItem[0]
    if (type === 'Income') {
      this.setState(prevStatus => ({income: prevStatus.income - amount}))
    } else {
      this.setState(prevStatus => ({expenses: prevStatus.expenses - amount}))
    }

    const updatedHistory = history.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({history: updatedHistory})
  }

  render() {
    const {history, amount, title} = this.state
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

        <MoneyDetails accountDetails={this.state} />

        <div className="transaction-cont">
          <div className="transaction-input">
            <h1 className="transaction-head">Add Transaction</h1>
            <form
              className="transaction-form"
              onSubmit={this.updateMoneyDetails}
            >
              <label className="label-texts" htmlFor="title">
                TITLE
              </label>
              <input
                onChange={this.readTitle}
                id="title"
                type="text"
                className="input-cont"
                value={title}
              />
              <label className="label-texts" htmlFor="amount">
                AMOUNT
              </label>
              <input
                onChange={this.readAmount}
                id="amount"
                type="text"
                className="input-cont"
                value={amount}
              />
              <label className="label-texts" htmlFor="type">
                TYPE
              </label>
              <select
                id="type"
                className="input-cont"
                name="type"
                onChange={this.changeType}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option id={eachOption.id} value={eachOption.optionId}>
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
              {history.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  deleteTransaction={this.deleteTransaction}
                  key={eachTransaction.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
