import { Link } from "react-router-dom";
import styles from "./Bar.module.scss";


export default function Bar(props) {
  return (
    <nav className={styles.navbar}>
      <ul class-name="{styles.navList}">
        <li className={styles.navItem}>
          <Link to="/">Photo Gallery</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/revenues">Enter a Sale</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/expenses">Enter an Expense</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/newaccts">Create a New Account</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/newpts">Enter a New Patient Record</Link>
        </li>
      </ul>
    </nav>
    
  );
}