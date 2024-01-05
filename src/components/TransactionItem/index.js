// Write your code here
import './index.css'

const TransactionItem = props => {
  const {title, amount, type, id} = props

  return (
    <div>
      <p>title</p>
      <p>amount</p>
      <p>type</p>
    </div>
  )
}

export default TransactionItem
