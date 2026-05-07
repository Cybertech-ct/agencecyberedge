import styles from './WhyUs.module.css';

const BLOCKS = [
  {
    num: '1',
    title: 'Un partenariat direct avec Shopify',
    intro: null,
    points: [
      'Accès à des outils et fonctionnalités avancées',
      'Bénéficier d\'un support prioritaire',
      'Optimiser la création de boutiques de manière plus efficace',
    ],
    highlight: null,
  },
  {
    num: '2',
    title: 'Une stratégie long terme',
    intro: 'Créer une boutique professionnelle ne coûte pas 39€. Nous investissons dans :',
    points: [
      'Un design optimisé pour la conversion',
      'Une structure prête à vendre',
      'Des intégrations essentielles',
      'Un support pour vous accompagner',
    ],
    highlight: 'Parce que notre objectif n\'est pas de faire un gain immédiat, mais de vous aider à démarrer rapidement. Et si vous ne faites aucune vente après 90 jours, nous vous remboursons intégralement.',
  },
  {
    num: '3',
    title: 'Des résultats concrets',
    intro: null,
    points: [
      '97% de nos clients gardent leur boutique après le premier mois',
      'Des milliers de boutiques déjà lancées',
      'Mise en ligne en moins de 24h',
      'Une grande partie de nos clients continue ensuite avec nous',
    ],
    highlight: null,
  },
];

const CARDS = [
  {
    title: 'Nous réussissons uniquement si vous réussissez',
    points: [
      'Chaque boutique doit être assez performante pour vous permettre de démarrer',
      'Nous avons tout intérêt à vous accompagner dans votre croissance',
      'Votre réussite crée une relation durable',
      'Notre modèle repose sur votre progression',
    ],
  },
  {
    title: 'Aucun risque',
    points: [
      'Aucun frais caché',
      'Aucun engagement compliqué',
      'Une garantie claire',
    ],
  },
];

export default function WhyUs() {
  const scrollToOffer = () => {
    document.querySelector('#offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.label}>TRANSPARENCE</div>
        <h2 className={styles.title}>Pourquoi seulement 39€ ?</h2>
        <p className={styles.titleSub}>La réponse va peut-être vous surprendre.</p>

        {/* Intro */}
        <div className={styles.intro}>
          <p className={styles.introText}>
            En tant que partenaire Shopify, on me pose souvent la même question : comment est-il
            possible de proposer des boutiques professionnelles prêtes à vendre pour 39€, alors
            que certains les facturent plus de 1000€ ?
          </p>
          <p className={styles.introBold}>
            La réponse est simple : nous ne gagnons que si vous réussissez.
          </p>
        </div>

        {/* Numbered blocks */}
        <div className={styles.blocks}>
          {BLOCKS.map(b => (
            <div key={b.num} className={styles.block}>
              <div className={styles.blockNum}>{b.num}</div>
              <div className={styles.blockBody}>
                <h3 className={styles.blockTitle}>{b.title}</h3>
                {b.intro && <p className={styles.blockIntro}>{b.intro}</p>}
                <ul className={styles.pointList}>
                  {b.points.map(p => (
                    <li key={p} className={styles.point}>
                      <span className={styles.check}>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {b.highlight && (
                  <div className={styles.highlight}>{b.highlight}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 2-column cards */}
        <div className={styles.cardGrid}>
          {CARDS.map(c => (
            <div key={c.title} className={styles.card}>
              <h4 className={styles.cardTitle}>{c.title}</h4>
              <ul className={styles.pointList}>
                {c.points.map(p => (
                  <li key={p} className={styles.point}>
                    <span className={styles.check}>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className={styles.conclusion}>
          <h4 className={styles.conclusionTitle}>Cette offre à 39€</h4>
          <p className={styles.conclusionText}>
            C'est notre manière de vous prouver notre valeur. Vous démarrez avec une boutique
            prête à vendre, sans prendre de risque. Et si les résultats sont là, on avance ensemble.
          </p>
          <p className={styles.conclusionPs}>
            P.S. Nous appliquons des standards élevés dans tout ce que nous livrons.
            Votre satisfaction n'est pas une option. C'est la base de notre travail.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <button className={styles.ctaBtn} onClick={scrollToOffer}>
            Obtenir ma boutique maintenant →
          </button>
        </div>

      </div>
    </section>
  );
}
