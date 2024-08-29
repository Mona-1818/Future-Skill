import styles from './search.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const data = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchCardById = async () => {
        setLoading(true);
        try {
          let response;
          if (!isNaN(query)) {
            response = await axios.get(`http://localhost:8000/cards/id/${query}`);
          } else {
            response = await axios.get(`http://localhost:8000/cards/${query}`);
          }
          if (response.data) {
            setFilteredData([response.data]); 
          } else {
            setFilteredData([]);
          }
        } catch {
          setFilteredData([]);
        } finally {
          setLoading(false);
        }
      };

      fetchCardById();
    } else {
      setFilteredData([]);
    }
  }, [query]);

  const handleSearch = () => {
    if (query) {
      const id = Number(query);
      
      if (!isNaN(id)) {
        const filtered = data.filter(item => item.id === id);
        setFilteredData(filtered);
      } else {
        const filtered = data.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
      }
    } else {
      setFilteredData([]);
    }
  };

  return (
    <section className={styles.searchbar}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.content}>How can we help?</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.content}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
              placeholder="Search..."
              className={styles.search}
            />
            <button onClick={handleSearch} className={styles.enter}>
              <FaArrowRight />
            </button>
          </div>
          <div className={styles.response}>
            {loading && <img src="/loading.gif" alt="Loading..." className={styles.loadingGif} />}
            {!loading && filteredData.length > 0 && (
              <ul className={styles.answers}>
                {filteredData.map(item => (
                  <li key={item.id}>
                    <div className={styles.answer}>
                      <div className={styles.answerbox}>
                        <span className={styles.title}><b>{item.title}</b></span>
                        <p className={styles.descp}>{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!loading && filteredData.length === 0 && query && (
              <span><b>No results found!</b></span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
