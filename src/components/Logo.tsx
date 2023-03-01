import styles from "./Logo.module.css";

import rocket from "./../assets/rocket.svg";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.rocket} src={rocket} />
      <span className={styles.logoto}>to</span>
      <span className={styles.logodo}>do</span>
    </div>
  );
};
