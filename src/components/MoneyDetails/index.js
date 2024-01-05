// Write your code here
import './index.css'

const MoneyDetails = props => {
  const el = 1
  return (
    <div className="money-details-cont">
      <div className="money-details-card balance">
        <img
          className="details-icon "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <h1 className="details-text-head">Your Balance</h1>
          <p className="details-text-amount">Rs.40,000</p>
        </div>
      </div>

      <div className="money-details-card income">
        <img
          className="details-icon "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <h1 className="details-text-head">Your Balance</h1>
          <p className="details-text-amount">Rs.40,000</p>
        </div>
      </div>

      <div className="money-details-card expense">
        <img
          className="details-icon "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <h1 className="details-text-head">Your Balance</h1>
          <p className="details-text-amount">Rs.40,000</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
