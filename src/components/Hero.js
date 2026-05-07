import React, { useState } from 'react';
import styles from './Hero.module.css';

const NICHES = [
  'High-Tech', 'Maison & Déco', 'Bijoux', 'Beauté',
  'Animaux', 'Fitness', 'Bébé', 'Mode',
];

const BONUSES = [
  { icon: '🏪', label: 'Boutique e-commerce clé en main', price: '997€' },
  { icon: '🏆', label: '10+ produits gagnants intégrés', price: '397€' },
  { icon: '🔑', label: 'Accès fournisseurs privés', price: '197€' },
  { icon: '📝', label: 'Fiches produits optimisées', price: '197€' },
  { icon: '🎓', label: 'Mini formation 3 jours', price: '97€' },
  { icon: '🛡️', label: 'Garantie 0 vente → remboursé + 50€', price: 'Incluse', noStrike: true },
];

export default function Hero() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ email: '', firstName: '', lastName: '', phone: '' });
  const [niche, setNiche] = useState('');

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleStep1 = (e) => {
    e.preventDefault();
    if (form.email && form.firstName) setStep(2);
  };

  return (
    <section className={styles.hero}>
      {/* ── Centered header ── */}
      <div className={styles.header}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Partenaire Officiel Shopify
        </div>

        <h1 className={styles.title}>
          Ta Boutique Shopify Clé En Main <em>Livrée En 24H</em> — Par Des Pros Qui Ont Déjà Vendu Pour <em>10M€</em>
        </h1>

        <p className={styles.sub}>
          Construite par des professionnels, chargée avec 10 produits gagnants, garantie remboursée&nbsp;+&nbsp;50€ si tu ne fais pas ta première vente en 90 jours
        </p>

        <div className={styles.statsRow}>
          <span>⭐ 4.8/5 (214 avis)</span>
          <span className={styles.statSep} />
          <span>🏪 1390+ boutiques livrées</span>
          <span className={styles.statSep} />
          <span>🏆 Livrée clé en main</span>
        </div>
      </div>

      {/* ── 2-column grid ── */}
      <div className={styles.grid}>

        {/* LEFT — video + bonuses + pricing */}
        <div className={styles.left}>
          {/* Video placeholder */}
          <div className={styles.videoBox}>
            <p className={styles.videoLabel}>▶ VSL — Regarde jusqu'à la fin</p>
            <div className={styles.playRing}>
              <span className={styles.playIcon}>▶</span>
            </div>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} />
            </div>
          </div>

          {/* Bonus list */}
          <ul className={styles.bonusList}>
            {BONUSES.map((b, i) => (
              <li key={i} className={styles.bonusItem}>
                <span className={styles.bonusEmoji}>{b.icon}</span>
                <span className={styles.bonusLabel}>{b.label}</span>
                <span className={b.noStrike ? styles.bonusIncluded : styles.bonusPrice}>
                  {b.price}
                </span>
              </li>
            ))}
          </ul>

          {/* Pricing summary */}
          <div className={styles.pricingBlock}>
            <div className={styles.pricingRow}>
              <span className={styles.pricingTotalLabel}>VALEUR TOTALE</span>
              <span className={styles.pricingTotalAmt}>1 885€</span>
            </div>
            <div className={styles.pricingDivider} />
            <div className={styles.pricingRow}>
              <span className={styles.pricingTodayLabel}>VOTRE PRIX AUJOURD'HUI</span>
              <span className={styles.pricingTodayAmt}>39€</span>
            </div>
          </div>
        </div>

        {/* RIGHT — form card */}
        <div className={styles.formCard}>
          {/* Step tabs */}
          <div className={styles.tabs}>
            <div className={`${styles.tab} ${step === 1 ? styles.tabActive : ''}`}>
              1&nbsp;&nbsp;INFORMATIONS
            </div>
            <div className={`${styles.tab} ${step === 2 ? styles.tabActive : ''}`}>
              2&nbsp;&nbsp;CHOIX DE BOUTIQUE
            </div>
          </div>

          {/* Step 1 — contact fields */}
          {step === 1 && (
            <form onSubmit={handleStep1} className={styles.formBody}>
              <input
                type="email"
                name="email"
                required
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                type="text"
                name="firstName"
                required
                placeholder="Prénom *"
                value={form.firstName}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={form.lastName}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={form.phone}
                onChange={handleChange}
                className={styles.input}
              />
              <button type="submit" className={styles.ctaBtn}>
                <span className={styles.ctaMain}>OBTENEZ VOTRE BOUTIQUE À 39€</span>
                <span className={styles.ctaSub}>Et faites votre première vente cette semaine</span>
              </button>
              <div className={styles.priceBlock}>
                <div className={styles.priceRealRow}>
                  <span className={styles.priceRealLabel}>Valeur réelle</span>
                  <span className={styles.priceRealAmt}>1 885€</span>
                </div>
                <div className={styles.priceTodayRow}>
                  <span className={styles.priceTodayLabel}>Aujourd'hui seulement</span>
                  <span className={styles.priceTodayAmt}>39€</span>
                </div>
                <p className={styles.priceNote}>Paiement unique · Aucun frais caché</p>
              </div>
            </form>
          )}

          {/* Step 2 — niche selection */}
          {step === 2 && (
            <div className={styles.formBody}>
              <p className={styles.nicheHeading}>Choisissez votre niche :</p>
              <div className={styles.nicheGrid}>
                {NICHES.map(n => (
                  <button
                    key={n}
                    className={`${styles.nicheBtn} ${niche === n ? styles.nicheBtnActive : ''}`}
                    onClick={() => setNiche(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
              {niche && (
                <button className={styles.ctaBtn} style={{ marginTop: '1rem' }}>
                  <span className={styles.ctaMain}>CONFIRMER MA BOUTIQUE {niche.toUpperCase()}</span>
                  <span className={styles.ctaSub}>Livraison sous 24h garantie</span>
                </button>
              )}
            </div>
          )}

          <p className={styles.secureNote}>🔒 Paiement 100% sécurisé · Livraison en 24h</p>
        </div>
      </div>
    </section>
  );
}
