// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {accountDetails} = props
  const {income, expenses, balance} = accountDetails
  return (
    <div className="money-details-cont">
      <div className="money-details-card balance">
        <img
          className="details-icon "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="details-text-head">Your Balance</p>
          <p data-testid="balanceAmount" className="details-text-amount">
            Rs {income - expenses}
          </p>
        </div>
      </div>

      <div className="money-details-card income">
        <img
          className="details-icon "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="details-text-head">Your Income</p>
          <p data-testid="incomeAmount" className="details-text-amount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="money-details-card expense">
        <img
          className="details-icon "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="details-text-head">Your Expenses</p>
          <p data-testid="expensesAmount" className="details-text-amount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
