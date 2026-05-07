import styles from './ShopExamples.module.css';

const SHOPS = [
  {
    emoji: '🖥️',
    niche: 'High-Tech',
    name: 'TechNova Store',
    stats: '⭐ 4.9 · 143 ventes ce mois',
    delivery: 'Livrée en 20h · Niche : High-Tech',
  },
  {
    emoji: '💄',
    niche: 'Beauté',
    name: 'GlowUp Beauty',
    stats: '⭐ 4.8 · 127 ventes ce mois',
    delivery: 'Livrée en 18h · Niche : Beauté',
  },
  {
    emoji: '💪',
    niche: 'Fitness',
    name: 'IronFit Shop',
    stats: '⭐ 4.7 · 98 ventes ce mois',
    delivery: 'Livrée en 22h · Niche : Fitness',
  },
];

export default function ShopExamples() {
  const scrollToOffer = () => {
    document.querySelector('#offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.label}>NOS BOUTIQUES</div>
      <h2 className={styles.title}>Des boutiques prêtes à vendre dès le premier jour</h2>
      <p className={styles.sub}>
        Chaque boutique est livrée avec un design pro, des produits gagnants et un thème adapté à ta niche
      </p>

      <div className={styles.grid}>
        {SHOPS.map(shop => (
          <div key={shop.name} className={styles.card}>
            <div className={styles.emojiCircle}>{shop.emoji}</div>
            <span className={styles.nicheBadge}>{shop.niche}</span>
            <h3 className={styles.shopName}>{shop.name}</h3>
            <p className={styles.stats}>{shop.stats}</p>
            <p className={styles.delivery}>🚀 {shop.delivery}</p>
            <p className={styles.disclaimer}>Boutique exemple — remplacée par la vôtre à la livraison</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrap}>
        <button className={styles.ctaBtn} onClick={scrollToOffer}>
          Je veux ma boutique à 39€ →
        </button>
      </div>
    </section>
  );
}
