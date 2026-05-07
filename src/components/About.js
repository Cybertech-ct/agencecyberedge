import React from 'react';
import styles from './About.module.css';

const STATS = [
  { num: '10M€+', label: 'Générés depuis 2019' },
  { num: '1300+', label: 'Boutiques livrées' },
  { num: '97%', label: 'Clients satisfaits' },
  { num: '5 ans', label: 'Expert Shopify' },
];

const BADGES = [
  '🏆 Top vendeur Shopify France',
  '✅ Partenaire Officiel Shopify',
  '🎓 1300+ entrepreneurs formés',
];

export default function About() {
  const scrollToOffer = () => {
    document.querySelector('#offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.label}>POURQUOI NOUS</div>
      <h2 className={styles.title}>Des résultats. Pas des promesses.</h2>

      <div className={styles.grid}>
        {/* Left column */}
        <div className={styles.left}>
          <p className={styles.body}>
            Je m'appelle Thierry — j'ai commencé le e-commerce depuis mon salon en 2019
            avec 300€ en poche. Aujourd'hui j'ai généré plus de 10M€ en ligne et formé
            plus de 1 000 entrepreneurs à travers la France.
          </p>
          <p className={styles.body}>
            Ce que j'ai compris après des centaines de boutiques : le problème n'est jamais
            la motivation. C'est toujours la boutique de départ qui ne convertit pas.
          </p>
          <p className={styles.body}>
            Alors j'ai créé un système. Une boutique livrée en 24h, prête à vendre,
            par des gens qui savent ce qu'ils font.
          </p>

          <div className={styles.statGrid}>
            {STATS.map(s => (
              <div key={s.label} className={styles.statBox}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <button className={styles.ctaBtn} onClick={scrollToOffer}>
            Créer ma boutique maintenant →
          </button>
          <p className={styles.ctaSub}>
            ✓ Livraison 24h &nbsp;·&nbsp; ✓ Garantie 90 jours &nbsp;·&nbsp; ✓ 39€ seulement
          </p>
        </div>

        {/* Right column — profile card */}
        <div className={styles.right}>
          <div className={styles.profileCard}>
            <div className={styles.avatar}>YB</div>
            <p className={styles.founderName}>Thierry</p>
            <p className={styles.founderTitle}>Fondateur, Agence CyberEdge</p>
            <p className={styles.founderStat}>10 000 000€ générés en ligne depuis 2018</p>
            <div className={styles.divider} />
            <div className={styles.badgeList}>
              {BADGES.map(b => (
                <div key={b} className={styles.badge}>{b}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
