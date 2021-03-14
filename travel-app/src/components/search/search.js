import React, {useState, useRef, useEffect} from 'react';

const Search = ({updateFilter}) =>{
  const inputEl = useRef(null);
  const [ searchVal, setSearchVal ] = useState('');

  const handleEnterClick = (e) => {
    if(e.code === 'Enter') {
      e.preventDefault();
      setSearchVal(searchVal);
    }
  }

  useEffect( () => {
    inputEl.current.focus();
    updateFilter(searchVal);
  }, [updateFilter, searchVal]);
  
  return(
    <form className="search">
      <div className="search__submit" 
        style={{ backgroundImage: `url('/images/icon-search.svg')` }}
        onClick={() => setSearchVal(searchVal)}></div>
      <input className="search__input"
        ref={inputEl}
        type="text"
        value={searchVal}
        placeholder="Search country"
        onChange = {(e) => setSearchVal(e.target.value)}
        onKeyPress = {handleEnterClick}
        autoComplete="off"/>
      <div className={`search__clear ${searchVal.length > 0 ? 'search__clear--shown': ''}`}
        onClick={() => setSearchVal('')}></div>
    </form>
  )
};

export default Search;
