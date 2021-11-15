import React, { useEffect, useState, useContext } from "react";
import styles from "./LandingPage.module.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchGifs, getGifsData } from "../../redux/fetchGifs";
import PlayButton from "../../assets/play_circle.svg";
import { themeContext } from "../../App";

const LandingPage = () => {
  const dispatch = useDispatch();
  const gifsData = useSelector(getGifsData);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const theme = useContext(themeContext);

  useEffect(() => {
    dispatch(fetchGifs(process.env.REACT_APP_INITIAL_SEARCH, 0));
  }, [dispatch]);

  return(
    <div
      className={`${styles.gridContainer}`}
    >
      {
        gifsData.map((data, index) => {
          return(
            <div
              onClick={() => setClickedIndex(clickedIndex === index ? -1 : index)}
              key={index}
              className={`${styles.imageContainer} ${styles[theme]}`}
            >
              {!(clickedIndex === index) &&
                <div className={styles.playButtonContainer}>
                  <img src={PlayButton} alt='img'/>
                </div>
              }
              {/* Low resolution link */}
              <img alt='img' src={clickedIndex === index ? data.images.preview_gif.url : data.images.fixed_width_still.url} />
              {/* High resolution link. Takes more time to load */}
              {/* <img src={clickedIndex === index ? data.images.fixed_width.url : data.images.fixed_width_still.url} /> */}
            </div>
          );
        })
      }
    </div>
  );
}

export default LandingPage;