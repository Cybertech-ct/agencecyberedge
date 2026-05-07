import React from 'react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Dernière chance</div>
      <h2>Lance-toi aujourd'hui.<br />Ta première vente cette semaine.</h2>
      <p>Les créations sont limitées chaque jour pour garantir une livraison en moins de 24h.</p>
      <button className={styles.btn}>
        Je veux ma boutique pour 37€ →
      </button>
      <div className={styles.note}>
        Livrée en &lt; 24h · Partenaire Shopify officiel · Remboursé + 50€ si 0 vente en 90 jours
      </div>
    </section>
  );
}
