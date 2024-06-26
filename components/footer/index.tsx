import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      Made with by&nbsp;
      <Link href="">Ramazan Mert Kaya</Link>
    </footer>
  );
};

export default Footer;
