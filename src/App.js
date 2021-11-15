import React, { createContext, useState } from 'react';
import styles from './App.module.css';
import LandingPage from "./components/LandingPage";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGifs, getGifsData } from './redux/fetchGifs';
import { getSearchKey, getPageNo, getTotalNoOfGifsAvailable } from './redux/PaginationAndSearch';
import SearchBar from './components/SearchBar';

export const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const searchKey = useSelector(getSearchKey);
  const pageNo = useSelector(getPageNo);
  const totalNoOfGifsAvailable = useSelector(getTotalNoOfGifsAvailable);
  const gifsData = useSelector(getGifsData);

  const dispatch = useDispatch();

  const rockBottom = gifsData.length >= totalNoOfGifsAvailable;

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight) < 1;
    if (bottom && !rockBottom) {
      dispatch(fetchGifs(searchKey, pageNo + 1));
    }
  }

  const handleChange = (val) => {
    if (val) {
      dispatch(fetchGifs(val, 0));      
    }
  }
  
  return (
    <themeContext.Provider value={theme}>
      <div className={`${styles.App} ${styles[theme]}`} onScroll={handleScroll}>
        <div className={styles.searchAndToggleContainer}>
          <SearchBar
            handleChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
            }
            label={theme === 'dark' ? 'Night' : 'Day'}
          />
        </div>
        
        <LandingPage />
        { gifsData.length !== 0 && rockBottom &&
        <div className='thatsAll'>
          <img alt='that all' src="https://media3.giphy.com/media/UYWibLwL1EYkgR78ve/giphy.gif?cid=7aa3f1df6xzf9olmcwgz13vlcsp4iuwjx4rvos39mhjzggpz&rid=giphy.gif&ct=g" />
        </div>
        }
      </div>
    </themeContext.Provider>
  );
}

export default App;
