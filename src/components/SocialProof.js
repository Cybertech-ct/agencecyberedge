import React from 'react';
import styles from './SocialProof.module.css';

const GRAPHS = [
  { img: '/images/graphique1.png' },
  { img: '/images/graphique2.png' },
  { img: '/images/graphique3.png' },
];

export default function SocialProof() {
  const scrollToOffer = () => {
    document.querySelector('#offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.label}>RÉSULTATS CLIENTS</div>
      <h2 className={styles.title}>Ils ont lancé. Ils vendent.</h2>
      <p className={styles.sub}>
        Des vraies boutiques, de vrais résultats, des vraies personnes comme toi
      </p>

      <div className={styles.carouselWrap}>
        <div className={styles.carouselTrack}>
          {[...GRAPHS, ...GRAPHS, ...GRAPHS, ...GRAPHS].map((g, i) => (
            <div key={i} className={styles.card}>
              <img src={g.img} alt={`Graphique ${(i % GRAPHS.length) + 1}`} className={styles.cardImg} />
              <div className={styles.cardLabel}>✓ Ventes vérifiées Shopify</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaWrap}>
        <button className={styles.ctaBtn} onClick={scrollToOffer}>
          🚀 Je me lance — 39€ aujourd'hui
        </button>
        <p className={styles.ctaSub}>Remboursé + 50€ offerts si aucune vente en 90 jours</p>
      </div>
    </section>
  );
}
