import "../../styles/sidebar/bottomcontainer.css";
import ListItem from "./ListOption";

export default function BottomContainer() {
  return (
    <div className='bottom--container'>
      <hr />
      <ListItem icon='fa-solid fa-gear' title='Settings'></ListItem>
      <ListItem icon='fa-solid fa-phone' title='Contact Us'></ListItem>
    </div>
  );
}
