import React from 'react';
import styles from './MainPage.module.css';
import { ATHLETES_GET } from '../../api';
import Athlete from '../../Components/Athlete';

const MainPage = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!data || data.length === 0) {
      async function getAthletes() {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = ATHLETES_GET();
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Data not found');
          const json = await response.json();
          setData(json);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      getAthletes();
    }
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>Olympic winners data list</span>
      </header>
      <main>
        <section className={styles.titles}>
          <ul className={styles.gridContainer}>
            <li></li>
            <li>
              <span>
                <strong>Athlete</strong>
              </span>
            </li>
            <li>
              <span>
                <strong>Year</strong>
              </span>
            </li>
            <li>
              <span>
                <strong>Country</strong>
              </span>
            </li>
            <li>
              <span>
                <strong>Sport</strong>
              </span>
            </li>
          </ul>
        </section>
        <section className={styles.scroller}>
          {data &&
            data.map((athleteData, index) => (
              <Athlete
                key={index}
                athlete={athleteData.athlete}
                year={athleteData.year}
                country={athleteData.country}
                sport={athleteData.sport}
                age={athleteData.age}
                date={athleteData.date}
                gold={athleteData.gold}
                silver={athleteData.silver}
                bronze={athleteData.bronze}
                total={athleteData.total}
              />
            ))}
          {loading && (
            <div className="loadingContainer">
              <div className="loading"></div>
            </div>
          )}
        </section>

        {error && (
          <section>
            <span>{error}</span>
          </section>
        )}
      </main>
    </div>
  );
};

export default MainPage;
