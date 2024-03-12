import './index.css'

const DenominationItem = ({denomination, withdraw}) => {
  const {value} = denomination
  const clickDenomination = () => {
    withdraw(value)
  }

  return (
    <li className="list-item">
      <button
        value={value}
        type="button"
        className="button"
        onClick={clickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
