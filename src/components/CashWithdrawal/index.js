import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="app-container">
        <div className="card">
          <div className="profile-container">
            <p className="profile-icon">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="amount-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denomination={eachItem}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
