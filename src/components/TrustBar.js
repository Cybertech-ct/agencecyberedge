import React from 'react';
import styles from './TrustBar.module.css';

const items = [
  { num: '7M€+', label: 'Générés en ligne' },
  { num: '1 390+', label: 'Boutiques lancées' },
  { num: '97%', label: 'Clients satisfaits' },
  { num: '< 24h', label: 'Délai de livraison' },
];

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <span className={styles.num}>{item.num}</span>
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
