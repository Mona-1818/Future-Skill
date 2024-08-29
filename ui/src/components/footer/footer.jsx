import styles from './footer.module.scss';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

  return (
    <section className={styles.foot}>
      <div className={styles.container}>
        <div className={styles.row}>
            <ul className={styles.list}>
                <li className={styles.head}><b>Abstract</b></li>
                <li>Branches</li>
            </ul>
        </div>
        <div className={styles.row}>
            <ul className={styles.list}>
                <li className={styles.head}><b>Resources</b></li>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Release Notes</li>
                <li>Status</li>
            </ul>
        </div>
        <div className={styles.row}>
            <ul className={styles.list}>
                <li className={styles.head}><b>Community</b></li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Dribble</li>
                <li>Podcast</li>
            </ul>
        </div>
        <div className={styles.row}>
            <div className={styles.block1}>
                <ul className={styles.list}>
                    <li className={styles.head}><b>Company</b></li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Legal</li>
                </ul>
            </div>
            <div className={styles.block2}>
                <span className={styles.heading}><b>Contact Us</b></span>
                <br />
                <span>info@abstract.com</span>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.about}>
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className={styles.logo}
                />
                <p><FaRegCopyright />copyright 2022 <br /> Abstract Studio Design, Inc <br /> All rights reserved</p>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Footer;
