import styles from './cards.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8000/cards');
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('Data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles.response}>
            {loading && <img src="/loading.gif" alt="Loading..." className={styles.loadingGif} />}
            {!loading && data.length > 0 && (
              <ul className={styles.answers}>
                <div className={styles.row}>
                    {data.map((item) => (
                    <div className={styles.row} key={item.id}>
                        {item.id % 2 === 1 && (
                        <li className={styles.answer}>
                            <div className={styles.answerbox}>
                            <span className={styles.title}><b>{item.title}</b></span>
                            <hr  className={styles.line} />
                            <p className={styles.descp}>{item.description}</p>
                            </div>
                        </li>
                        )}
                    </div>
                    ))}
                </div>
                <div className={styles.row}>
                    {data.map((item) => (
                    <div className={styles.row} key={item.id}>
                        {item.id % 2 === 0 && (
                        <li className={styles.answer}>
                            <div className={styles.answerbox}>
                            <span className={styles.title}><b>{item.title}</b></span>
                            <hr  className={styles.line} />
                            <p className={styles.descp}>{item.description}</p>
                            </div>
                        </li>
                        )}
                    </div>
                    ))}
                </div>
              </ul>
            )}
            {!loading && data.length === 0 && (
              <span><b>No data found!</b></span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
