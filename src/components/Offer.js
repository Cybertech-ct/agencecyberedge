import React, { useEffect, useRef } from 'react';
import styles from './Offer.module.css';

const items = [
  { icon: '🏪', title: 'Boutique e-commerce clé en main', desc: 'Design professionnel, optimisé pour la conversion', price: '997€' },
  { icon: '🏆', title: '10+ produits gagnants intégrés', desc: 'Sélectionnés par des experts du dropshipping', price: '397€' },
  { icon: '🔑', title: 'Accès aux meilleurs fournisseurs', desc: 'Réseau privé sélectionné pour fiabilité & marges', price: '197€' },
  { icon: '📝', title: 'Fiches produits optimisées', desc: 'Copywriting qui vend, photos pros, SEO inclus', price: '197€' },
  { icon: '🎓', title: 'Mini formation "Premiers pas"', desc: '3 jours pour faire ta première vente', price: '97€' },
  { icon: '🛡️', title: 'Garantie 90 jours', desc: '0 vente → remboursé + 50€ bonus offerts', price: 'Incluse' },
];

export default function Offer() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section className={styles.section} id="offer">
      <div className={styles.sectionLabel}>Ce que tu reçois</div>
      <h2>Tout ce dont tu as besoin pour commencer</h2>
      <p className={styles.intro}>Un pack complet. Aucun outil supplémentaire à acheter pour démarrer.</p>

      <div className={`${styles.grid} ${styles.fadeIn}`} ref={ref}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.text}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <span className={styles.oldPrice}>{item.price}</span>
            </li>
          ))}
        </ul>

        <div className={styles.priceBox}>
          <div className={styles.priceBoxLabel}>Valeur totale : 1 885€</div>
          <div className={styles.priceHeroOld}>1 885€</div>
          <div className={styles.priceHeroNew}>
            <span className={styles.currency}>€</span>39
          </div>
          <div className={styles.priceNote}>Paiement unique · Aucun frais caché · Aucun abonnement</div>
          <div className={styles.guarantee}>
            <strong>Garantie béton 90 jours.</strong> Si tu ne fais aucune vente, on te rembourse les 39€{' '}
            <em>et</em> on t'offre 50€ en bonus pour t'avoir fait perdre ton temps.
          </div>
          <button className={styles.ctaBtn}>Je veux ma boutique à 39€ →</button>
          <div className={styles.ctaNote}>Livrée en moins de 24h · Partenaire officiel Shopify</div>
        </div>
      </div>
    </section>
  );
}
