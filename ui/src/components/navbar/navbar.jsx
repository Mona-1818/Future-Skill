import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar =() =>{

    return (
        <section className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img 
                                src="/logo.png" 
                                alt="Logo" 
                                className={styles.logo}
                            />
                        </div>
                        <div className={styles.titlecontent}>
                            <Link to="/" className={styles.title}><b>Abstract</b></Link>
                            <div className={styles.verticalLine}></div>
                            <Link to="/help" className={styles.title}>Help Center</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <Link to="/help" className={styles.button}>
                            Submit a request
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Navbar;