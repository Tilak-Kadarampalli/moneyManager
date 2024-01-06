// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="history-table-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        data-testid="delete"
        type="button"
        className="delete-btn"
        onClick={onDelete}
      >
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </div>
      </button>
    </li>
  )
}

export default TransactionItem
