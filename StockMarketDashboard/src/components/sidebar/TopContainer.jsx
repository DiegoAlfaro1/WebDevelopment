import TotalProfit from "./TotalProfit";
import "../../styles/sidebar/TopContainer.css";
export default function TopContainer() {
  return (
    <div className='top--container'>
      <div className='logo'>
        <img src='/stockIcon.svg' alt='StockLogo' className='logo--svg' />
        <p>StockWise</p>
      </div>

      <TotalProfit balance='$1000.00' percentage={18.2}></TotalProfit>
    </div>
  );
}
