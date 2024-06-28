import "../../styles/navbar/searchbar.css";

export default function SearchBar() {
  return (
    <div className='search--bar'>
      <form action='' className='search-bar'>
        <input
          type='search'
          name='search'
          placeholder='Search for a stock'
          className='search--input'
        />
        <button className='search--btn' type='submit'>
          <span>
            <i class='fa-solid fa-magnifying-glass'></i>
          </span>
        </button>
      </form>
    </div>
  );
}
