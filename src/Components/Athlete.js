import React from 'react';
import styles from './Athlete.module.css';
import { ReactComponent as SvgArrow } from '../svg/arrow.svg';
import { ReactComponent as SvgGoldMedal } from '../svg/gold-medal.svg';
import { ReactComponent as SvgSilverMedal } from '../svg/silver-medal.svg';
import { ReactComponent as SvgBronzeMedal } from '../svg/bronze-medal.svg';

const Athlete = ({
  athlete,
  year,
  country,
  sport,
  age,
  date,
  gold,
  silver,
  bronze,
  total,
}) => {
  const [infoActive, setInfoActive] = React.useState(false);

  function handleActiveInfo() {
    setInfoActive(!infoActive);
  }

  return (
    <>
      <ul
        className={
          infoActive
            ? `${styles.gridContainer} ${styles.athletes} ${styles.activeAthlete}`
            : `${styles.gridContainer} ${styles.athletes}`
        }
        onClick={handleActiveInfo}
      >
        <li className={styles.arrowContainer}>
          <SvgArrow
            className={
              infoActive
                ? `${styles.arrow} ${styles.arrowDown}`
                : `${styles.arrow}`
            }
          />
        </li>

        <li>
          <p>{athlete}</p>
        </li>

        <li>
          <p>{year}</p>
        </li>

        <li>
          <p>{country}</p>
        </li>

        <li>
          <p>{sport}</p>
        </li>
      </ul>
      {infoActive ? (
        <>
          <ul className={`${styles.gridContainer} ${styles.athletesData}`}>
            <li></li>

            <li>
              <div className={styles.columnCell}>
                <span>Age</span>
                <span>{age}</span>
              </div>
            </li>

            <li>
              <div className={styles.columnCell}>
                <span>Date</span>
                <span>{date}</span>
              </div>
            </li>

            <li>
              <div className={styles.columnCell}>
                <span>Medals</span>
                <div className={styles.containerMedals}>
                  <SvgGoldMedal className={styles.medals} />
                  <span>{gold}</span>
                  <SvgSilverMedal className={styles.medals} />
                  <span>{silver}</span>
                  <SvgBronzeMedal className={styles.medals} />
                  <span>{bronze}</span>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.columnCell}>
                <span>Total medals</span>
                <span>{total}</span>
              </div>
            </li>
          </ul>
        </>
      ) : null}
    </>
  );
};

export default Athlete;
