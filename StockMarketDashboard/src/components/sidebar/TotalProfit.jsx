import "../../styles/sidebar/TotalProfit.css";

export default function TotalProfit(props) {
  let percentage = props.percentage + "%";
  if (props.percentage > 0) {
    percentage = "+" + props.percentage + "%";
  }
  return (
    <div className='total--profit'>
      <div className='total--investment'>
        <h2>Total Investment</h2>
        <h1>{props.balance}</h1>
      </div>
      <p className='percentage'>{percentage}</p>
    </div>
  );
}
