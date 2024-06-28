import "../../styles/sidebar/ListOption.css";

export default function ListItem(props) {
  return (
    <div className='item--list'>
      <a>
        <div className='option'>
          <i class={props.icon}></i>
          <h1>{props.title}</h1>
        </div>
      </a>
    </div>
  );
}
