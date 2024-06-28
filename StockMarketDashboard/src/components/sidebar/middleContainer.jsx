import ListItem from "./ListOption";
import "../../styles/sidebar/middlecontainer.css";

export default function MiddleContainer() {
  return (
    <div className='middle--container'>
      <ListItem title='Home' icon='fa-solid fa-house-chimney-window'></ListItem>
      <ListItem
        title='Dashboard'
        icon='fa-solid fa-money-bill-trend-up'
      ></ListItem>
      <ListItem title='Wallet' icon='fa-solid fa-wallet'></ListItem>
      <ListItem title='News' icon='fa-solid fa-newspaper'></ListItem>
    </div>
  );
}
