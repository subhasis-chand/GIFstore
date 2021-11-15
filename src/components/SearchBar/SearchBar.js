import React, { useContext } from "react";
import searchBlack from "../../assets/search_black.svg";
import searchWhite from "../../assets/search_white.svg";
import styles from './SearchBar.module.css';
import { themeContext } from "../../App";

const SearchBar = ({ handleChange }) => {
  const theme = useContext(themeContext);

  return(
    <div className={styles.searchBarContainer}>
      <input
        style={{
          backgroundColor: theme === 'dark' ? 'black' : 'white',
          color: theme === 'dark' ? 'white' : 'black'
        }}
        placeholder='Search GIFs'
        onChange={(event) => handleChange(event.target.value)}
      />
      <img src={theme === 'dark' ? searchWhite : searchBlack} alt='search'/>
    </div>
  );
}

export default SearchBar;