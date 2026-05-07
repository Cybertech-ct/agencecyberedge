import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrollToOffer = () => {
    document.querySelector('#offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Agence <span>CyberEdge</span>
      </div>
      <button className={styles.cta} onClick={scrollToOffer}>
        Ma boutique à 37€ →
      </button>
    </nav>
  );
}
