import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "Comment faites-vous ça pour seulement 37€ ? Est-ce une arnaque ?",
    a: "En tant que partenaires officiels Shopify, on accède à des tarifs privilégiés sur les outils et applications. Notre modèle : on investit dans ta boutique aujourd'hui, et on grandit avec toi sur le long terme. Les 37€ couvrent une partie des coûts — le reste se rentabilise quand tu réussis.",
  },
  {
    q: "Dois-je avoir un compte Shopify avant de commander ?",
    a: "Non — on s'occupe de tout. Tu recevras une boutique Shopify entièrement construite. Shopify offre une période d'essai gratuite, après quoi leur abonnement mensuel est géré directement entre toi et eux. Nous, on ne te facture que les 37€ une seule fois.",
  },
  {
    q: "Combien de produits y aura-t-il sur ma boutique ?",
    a: "Ta boutique est livrée avec 10 produits dans la niche que tu as choisie. Tout est déjà intégré, optimisé et prêt à vendre dès le premier jour.",
  },
  {
    q: "Puis-je me faire rembourser si ça ne fonctionne pas ?",
    a: "Oui — garantie 90 jours. Si tu n'as fait aucune vente après 90 jours d'utilisation, on rembourse les 37€ et on t'offre en plus 50€ pour t'avoir fait perdre ton temps. Les conditions s'appliquent.",
  },
  {
    q: "Comment je reçois l'argent de mes ventes ?",
    a: "Tu connectes ton compte bancaire directement dans Shopify. Lorsque tes clients commandent, Shopify traite les paiements de façon sécurisée et te verse directement sur ton compte.",
  },
  {
    q: "Y a-t-il d'autres frais en dehors des 37€ ?",
    a: "Les 37€ couvrent uniquement la création de ta boutique par notre équipe. Shopify a son propre abonnement mensuel après la période d'essai. Aucun frais caché de notre côté.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Questions fréquentes</div>
      <h2>Tout ce que tu veux savoir</h2>
      <p className={styles.intro}>Toujours un doute ? Les réponses ci-dessous, ou contacte-nous.</p>

      <div className={styles.faqList}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`${styles.item} ${open === i ? styles.open : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className={styles.question}>
              <span>{faq.q}</span>
              <div className={styles.toggle}>{open === i ? '×' : '+'}</div>
            </div>
            <div className={styles.answer}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
