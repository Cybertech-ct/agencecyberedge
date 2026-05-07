import React, { useEffect, useRef } from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    icon: '🏪',
    title: 'On crée ta boutique',
    desc: 'Un site Shopify complet avec 10 produits à fort potentiel dans ta niche. En moins de 24h.',
  },
  {
    num: '02',
    icon: '📦',
    title: 'Les fournisseurs livrent',
    desc: 'Tes fournisseurs expédient directement à tes clients. Zéro stock, zéro logistique.',
  },
  {
    num: '03',
    icon: '💰',
    title: 'Tu encaisses la marge',
    desc: 'Tu vends à 39,99€, tu paies 9,99€ au fournisseur. Tu gardes 30€ par vente.',
  },
  {
    num: '04',
    icon: '📈',
    title: 'Tu scales',
    desc: 'Réinvestis en pub, augmente les volumes. Tes revenus grandissent automatiquement.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const scrollToOffer = () => {
    document.querySelector('#offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>COMMENT ÇA MARCHE</div>
      <h2>4 étapes. C'est tout.</h2>
      <p className={styles.intro}>
        Tu commandes, on construit, tu vends. Le modèle dropshipping fait le reste.
      </p>

      <div className={`${styles.stepsRow} ${styles.fadeIn}`} ref={ref}>
        {steps.map((step, i) => (
          <React.Fragment key={step.num}>
            <div className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.iconBox}>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className={styles.arrow}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className={styles.ctaBlock}>
        <button className={styles.ctaBtn} onClick={scrollToOffer}>
          JE VEUX MA BOUTIQUE À 39€ →
        </button>
        <p className={styles.ctaAssurance}>
          ✓ Livrée en 24h &nbsp;·&nbsp; ✓ Garantie 90 jours remboursée &nbsp;·&nbsp; ✓ Aucun frais caché
        </p>
      </div>
    </section>
  );
}
