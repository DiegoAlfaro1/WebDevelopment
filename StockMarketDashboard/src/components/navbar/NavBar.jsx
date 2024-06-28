import "../../styles/navbar/navbar.css";
import SearchBar from "./SearchBar";
import Account from "./Account";

export default function NavBar() {
  return (
    <div className='nav--bar'>
      <SearchBar></SearchBar>
      <Account></Account>
    </div>
  );
}
