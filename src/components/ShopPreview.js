import React, { useState, useEffect } from 'react';
import styles from './ShopPreview.module.css';

const SHOPS = [
  {
    id: 0,
    name: 'TechNova Store',
    niche: 'High-Tech',
    accent: '#3b82f6',
    url: 'technova-store.myshopify.com',
    layout: 'homepage',
  },
  {
    id: 1,
    name: 'GlowUp Beauty',
    niche: 'Beauté',
    emoji: '💄',
    accent: '#f472b6',
    url: 'glowup-beauty.myshopify.com',
    layout: 'product',
  },
  {
    id: 2,
    name: 'IronFit Shop',
    niche: 'Fitness',
    emoji: '💪',
    accent: '#22c55e',
    gradient: 'linear-gradient(135deg, #0a1f0a 0%, #163616 100%)',
    heroImg: '/images/hero-fitness.png',
    ctaText: 'Découvrir la collection →',
    heroCtaBg: '#ffffff',
    heroCtaColor: '#0a0a0a',
    ctaBg: '#0a0a0a',
    ctaTextColor: '#ffffff',
    logoImg: '/images/logo-forgebody.png',
    url: 'ironfit-shop.myshopify.com',
    heroTitle: 'ForgeBody Studio',
    priceColor: '#0a0a0a',
    heroSub: 'Équipement fitness premium livré chez toi',
    products: [
      { name: 'Barre de Résistance Pro', price: '49,99€', old: '89,99€', img: '/images/produit-barre.jpg' },
      { name: 'Ceinture Abdominale EMS', price: '34,99€', old: '69,99€', img: '/images/produit-ceinture.png' },
      { name: 'Roue Abdominale Elite', price: '24,99€', old: '44,99€', img: '/images/produit-roue.png' },
      { name: 'Banc Musculation Pro 800lb', price: '129,99€', old: '249,99€', img: '/images/produit-banc.png' },
    ],
  },
];

const TECH_BRANDS = ['⚡ Apple', 'Samsung', 'Sony', 'Xiaomi', 'Bose', 'JBL', 'Philips', 'Logitech'];

const TECH_BESTSELLERS = [
  { name: 'Écouteurs Pro X200', price: '49,99€', old: '89,99€', stars: '4.8', sales: '1.2k', img: '/images/technova-ecouteurs.png' },
  { name: 'Montre Connectée FitX Pro', price: '79,99€', old: '149,99€', stars: '4.9', sales: '890', img: '/images/technova-montre.png' },
  { name: 'Chargeur Sans Fil Ultra 65W', price: '29,99€', old: '59,99€', stars: '4.7', sales: '2.1k', img: '/images/technova-chargeur.png' },
];

function TechNovaHomePage({ isMobile }) {
  return (
    <div style={{ background: '#0a0a0a', fontFamily: '-apple-system, "DM Sans", sans-serif', minHeight: '100%' }}>

      {/* Navbar */}
      <div className={styles.techNav}>
        {isMobile ? (
          <>
            <span style={{ color: '#fff', fontSize: '1.1rem' }}>☰</span>
            <img src="/images/logo-technova.png" height="32" alt="TechNova" style={{ objectFit: 'contain', display: 'block' }} />
            <span style={{ color: '#fff', fontSize: '0.9rem' }}>🛒</span>
          </>
        ) : (
          <>
            <img src="/images/logo-technova.png" height="40" alt="TechNova" style={{ objectFit: 'contain', display: 'block' }} />
            <div className={styles.techNavLinks}>
              {['Accueil', 'Produits', 'Marques', 'Contact'].map(l => (
                <span key={l} className={styles.techNavLink}>{l}</span>
              ))}
            </div>
            <span style={{ color: '#9ca3af', fontSize: '0.82rem' }}>🛒 0</span>
          </>
        )}
      </div>

      {/* Hero */}
      <div
        className={`${styles.techHero} ${isMobile ? styles.techHeroMobile : ''}`}
        style={isMobile ? {
          backgroundImage: 'url(/images/technova-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        } : {}}
      >
        {isMobile && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />}
        <div className={styles.techHeroLeft} style={isMobile ? { position: 'relative', zIndex: 1 } : {}}>
          <div className={styles.techBadge}>🔥 Nouveauté 2025</div>
          <p className={styles.techTitle}>
            <span className={styles.techTitleLine1}>TOUT CE QU'IL VOUS FAUT,</span>
            <span className={styles.techTitleLine2}>AU MEILLEUR PRIX</span>
          </p>
          <div className={`${styles.techTrustBadges} ${isMobile ? styles.techTrustMobile : ''}`}>
            <span>🛡️ GARANTIE 2 ANS</span>
            <span>🚚 LIVRAISON EXPRESS</span>
            <span>🔄 RETOURS 30 JOURS</span>
          </div>
          <div className={styles.techHeroBtn}>Voir la collection →</div>
        </div>
        {!isMobile && (
          <div className={styles.techHeroRight}>
            <img
              src="/images/technova-hero.png"
              alt="TechNova Hero"
              style={{ width: '100%', height: '250px', objectFit: 'contain', borderRadius: '12px' }}
            />
          </div>
        )}
      </div>

      {/* Marquee */}
      <div className={styles.techMarqueeWrap}>
        <div className={styles.techMarquee}>
          {[0, 1].flatMap(() => TECH_BRANDS.map((b, i) => (
            <span key={`${b}-${i}`} className={styles.techMarqueeItem}>{b} ·</span>
          )))}
        </div>
      </div>

      {/* Bestsellers */}
      <div className={styles.techBs}>
        <p className={styles.techBsTitle}>Nos Bestsellers</p>
        <div className={styles.techBsList}>
          {TECH_BESTSELLERS.map((p, i) => (
            <div key={i} className={styles.techBsCard}>
              <div className={styles.techBsImg}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className={styles.techBsInfo}>
                <p className={styles.techBsName}>{p.name}</p>
                <div className={styles.techBsPrices}>
                  <span className={styles.techBsOld}>{p.old}</span>
                  <span className={styles.techBsNew}>{p.price}</span>
                </div>
                <p className={styles.techBsStats}>⭐ {p.stars} · {p.sales} ventes</p>
              </div>
              <div className={styles.techBsBtn}>Ajouter</div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo banner */}
      <div className={styles.techPromoBanner}>
        🔥 Offre Flash — -40% sur toute la collection · Aujourd'hui seulement
      </div>

      {/* Footer */}
      <div className={styles.techFooter}>
        {['Accueil', 'Produits', 'Contact', 'CGV'].map((l, i) => (
          <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            {i > 0 && <span className={styles.techFooterDot}>·</span>}
            <span className={styles.techFooterLink}>{l}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const GLOW_THUMBS = [
  '/images/serum-glowup-hero.png',
  '/images/serum-glowup-effets.png',
  '/images/serum-glowup-premium.png',
];

const GLOW_REVIEWS = [
  { initials: 'ML', bg: '#f472b6', name: 'Marie L.', text: 'Résultats visibles en moins de 2 semaines ! Ma peau est lumineuse et hydratée.' },
  { initials: 'SC', bg: '#a78bfa', name: 'Sophie C.', text: 'Texture légère, s\'absorbe vite. Je recommande les yeux fermés !' },
];

function GlowUpProductPage({ isMobile }) {
  const [activeImg, setActiveImg] = useState(GLOW_THUMBS[0]);
  return (
    <div className={styles.shopContent}>
      {/* Navbar */}
      <div className={styles.shopNav}>
        {isMobile ? (
          <>
            <span className={styles.navHamburger}>☰</span>
            <img src="/images/logo-glowupbeauty.png" height="32" alt="GlowUp Beauty" style={{ objectFit: 'contain', display: 'block' }} />
            <span className={styles.navCart}>🛒</span>
          </>
        ) : (
          <>
            <img src="/images/logo-glowupbeauty.png" height="40" alt="GlowUp Beauty" style={{ objectFit: 'contain', display: 'block' }} />
            <div className={styles.navLinks}>
              {['Accueil', 'Collections', 'À propos', 'Contact'].map(l => (
                <span key={l} className={styles.navLink}>{l}</span>
              ))}
            </div>
            <div className={styles.navActions}>
              <span>🔍</span>
              <span>🛒 0</span>
            </div>
          </>
        )}
      </div>

      {/* Product layout — 2 col desktop, stacked mobile */}
      <div className={`${styles.glowProductLayout} ${isMobile ? styles.glowProductMobile : ''}`}>
        {/* Left: images */}
        <div className={styles.glowLeft}>
          <div className={styles.glowMainImg}>
            <img
              src={activeImg}
              alt="Sérum Éclat Visage"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }}
            />
          </div>
          <div className={styles.glowThumbs}>
            {GLOW_THUMBS.map((src, i) => (
              <div
                key={i}
                className={`${styles.glowThumb} ${src === activeImg ? styles.glowThumbActive : ''}`}
                onClick={() => setActiveImg(src)}
              >
                <img src={src} alt={`vue ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: product info */}
        <div className={styles.glowRight}>
          <div className={styles.glowBadge}>⭐ Bestseller</div>
          <p className={styles.glowProductName}>Sérum Éclat Visage Premium</p>
          <div className={styles.glowStars}>
            ★★★★★ <span className={styles.glowStarsCount}>4.9 (247 avis)</span>
          </div>
          <div className={styles.glowPrices}>
            <span className={styles.glowPriceOld}>49,99€</span>
            <span className={styles.glowPriceNew}>24,99€</span>
          </div>
          <p className={styles.glowDesc}>
            Formule concentrée en vitamine C et acide hyaluronique. Résultats visibles en 7 jours.
          </p>
          <div className={styles.glowQty}>
            <div className={styles.glowQtyBtn}>−</div>
            <div className={styles.glowQtyNum}>1</div>
            <div className={styles.glowQtyBtn}>+</div>
          </div>
          <div className={styles.glowBtnPrimary}>Ajouter au panier</div>
          <div className={styles.glowBtnSecondary}>Acheter maintenant</div>
          <div className={styles.glowTrust}>
            <span className={styles.glowTrustItem}>✓ Livraison gratuite</span>
            <span className={styles.glowTrustItem}>✓ Retours 30 jours</span>
            <span className={styles.glowTrustItem}>✓ Paiement sécurisé</span>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className={styles.glowReviews}>
        <p className={styles.glowReviewsTitle}>Avis clients</p>
        <div className={styles.glowReviewList}>
          {GLOW_REVIEWS.map(r => (
            <div key={r.name} className={styles.glowReviewItem}>
              <div className={styles.glowAvatar} style={{ background: r.bg }}>{r.initials}</div>
              <div className={styles.glowReviewBody}>
                <p className={styles.glowReviewName}>{r.name}</p>
                <div className={styles.glowReviewStars}>★★★★★</div>
                <p className={styles.glowReviewText}>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={styles.shopFooter}>
        <span style={{ color: '#f472b6' }}>✓</span> Paiement sécurisé &nbsp;·&nbsp; Retours gratuits &nbsp;·&nbsp; Support 24/7
      </div>
    </div>
  );
}

function ShopContent({ shop, view }) {
  const isMobile = view === 'mobile';
  if (shop.layout === 'homepage') return <TechNovaHomePage isMobile={isMobile} />;
  if (shop.layout === 'product') return <GlowUpProductPage isMobile={isMobile} />;
  return (
    <div className={`${styles.shopContent} ${isMobile ? styles.shopMobile : ''} ${shop.darkTheme ? styles.shopDark : ''}`}>

      {/* Fake Shopify navbar */}
      <div className={styles.shopNav}>
        {isMobile ? (
          <>
            <span className={styles.navHamburger}>☰</span>
            {shop.logoImg ? (
              <img src={shop.logoImg} height="32" alt={shop.name} style={{ display: 'block' }} />
            ) : shop.logoDisplay ? (
              <div className={styles.navLogoStack}>
                <span className={styles.navLogoName}>{shop.logoDisplay.icon} {shop.logoDisplay.name}</span>
                <span className={styles.navLogoSub}>{shop.logoDisplay.sub}</span>
              </div>
            ) : (
              <span className={styles.navLogoCenter} style={{ color: shop.accent }}>{shop.name}</span>
            )}
            <span className={styles.navCart}>🛒</span>
          </>
        ) : (
          <>
            {shop.logoImg ? (
              <img src={shop.logoImg} height="40" alt={shop.name} style={{ display: 'block' }} />
            ) : shop.logoDisplay ? (
              <div className={styles.navLogoStack}>
                <span className={styles.navLogoName}>{shop.logoDisplay.icon} {shop.logoDisplay.name}</span>
                <span className={styles.navLogoSub}>{shop.logoDisplay.sub}</span>
              </div>
            ) : (
              <span className={styles.navLogoLeft} style={{ color: shop.accent }}>{shop.name}</span>
            )}
            <div className={styles.navLinks}>
              {['Accueil', 'Produits', 'À propos', 'Contact'].map(l => (
                <span key={l} className={styles.navLink}>{l}</span>
              ))}
            </div>
            <div className={styles.navActions}>
              <span>🔍</span>
              <span>🛒 0</span>
            </div>
          </>
        )}
      </div>

      {/* Hero banner */}
      <div
        className={`${styles.shopHero} ${shop.heroImg ? styles.shopHeroReal : ''}`}
        style={shop.heroImg
          ? { backgroundImage: `url(${shop.heroImg})` }
          : { background: shop.gradient }
        }
      >
        {shop.heroImg && <div className={styles.heroOverlay} />}
        <div className={styles.heroInner}>
          <p className={styles.heroTitle}>{shop.heroTitle}</p>
          <p className={styles.heroSub}>{shop.heroSub}</p>
          <div className={styles.heroCta} style={{ background: shop.heroCtaBg || shop.ctaBg || shop.accent, color: shop.heroCtaColor || shop.ctaTextColor || '#ffffff', fontWeight: shop.heroCtaColor ? 700 : undefined }}>
            {shop.ctaText || 'Commander →'}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className={styles.shopProds}>
        <p className={styles.prodsHeading}>Produits phares</p>
        <div className={`${styles.prodsGrid} ${isMobile ? styles.prodsGrid2 : styles.prodsGrid4}`}>
          {shop.products.map((p, i) => (
            <div key={i} className={styles.prodCard}>
              {p.img ? (
                <div className={styles.prodImgReal}>
                  <img src={p.img} alt={p.name} className={styles.realImg} />
                </div>
              ) : (
                <div className={styles.prodImg} style={{ background: `${shop.accent}18` }}>
                  <span>{shop.emoji}</span>
                </div>
              )}
              <div className={styles.prodBody}>
                <p className={styles.prodName}>{p.name}</p>
                <div className={styles.prodPrices}>
                  <span className={styles.prodOld}>{p.old}</span>
                  <span className={styles.prodNew} style={{ color: shop.priceColor || shop.accent }}>{p.price}</span>
                </div>
                <div className={styles.prodBtn} style={{ background: shop.ctaBg || shop.accent, color: shop.ctaTextColor || '#ffffff' }}>
                  Ajouter au panier
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fake footer */}
      <div className={styles.shopFooter}>
        <span style={{ color: shop.accent }}>✓</span> Paiement sécurisé &nbsp;·&nbsp; Retours gratuits &nbsp;·&nbsp; Support 24/7
      </div>
    </div>
  );
}

export default function ShopPreview() {
  const [view, setView] = useState('desktop');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 768) setView('mobile');
  }, []);

  const prev = () => setIdx(i => (i - 1 + SHOPS.length) % SHOPS.length);
  const next = () => setIdx(i => (i + 1) % SHOPS.length);
  const shop = SHOPS[idx];

  const scrollToOffer = () => {
    document.querySelector('#offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.label}>NOS BOUTIQUES</div>
      <h2 className={styles.title}>Un aperçu de ta future boutique</h2>
      <p className={styles.sub}>
        Scroll dans la boutique, change de vue, navigue entre les exemples
      </p>

      {/* View toggle */}
      <div className={styles.viewToggle}>
        <button
          className={`${styles.viewBtn} ${view === 'desktop' ? styles.viewBtnActive : ''}`}
          onClick={() => setView('desktop')}
        >
          🖥️ Desktop
        </button>
        <button
          className={`${styles.viewBtn} ${view === 'mobile' ? styles.viewBtnActive : ''}`}
          onClick={() => setView('mobile')}
        >
          📱 Mobile
        </button>
      </div>

      {/* Carousel */}
      <div className={styles.carousel}>
        <button className={`${styles.arrow} ${styles.sideArrow}`} onClick={prev} aria-label="Précédent">←</button>

        <div className={styles.frameWrap}>
          {view === 'desktop' ? (
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span className={`${styles.browserDot} ${styles.dotRed}`} />
                  <span className={`${styles.browserDot} ${styles.dotYellow}`} />
                  <span className={`${styles.browserDot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.browserUrl}>🔒 {shop.url}</div>
                <div className={styles.browserUrlSpacer} />
              </div>
              <div className={styles.browserContent}>
                <ShopContent shop={shop} view="desktop" />
              </div>
            </div>
          ) : (
            <div className={styles.phoneFrame}>
              <div className={styles.phoneTop}>
                <div className={styles.phoneNotch} />
              </div>
              <div className={styles.phoneScreen}>
                <ShopContent shop={shop} view="mobile" />
              </div>
              <div className={styles.phoneBottom}>
                <div className={styles.homeBar} />
              </div>
            </div>
          )}
        </div>

        <button className={`${styles.arrow} ${styles.sideArrow}`} onClick={next} aria-label="Suivant">→</button>
      </div>

      {/* Mobile controls — arrows + dots inline (hidden on desktop) */}
      <div className={styles.mobileControls}>
        <button className={styles.mobileArrow} onClick={prev} aria-label="Précédent">←</button>
        {SHOPS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dotInd} ${i === idx ? styles.dotIndActive : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Boutique ${i + 1}`}
          />
        ))}
        <button className={styles.mobileArrow} onClick={next} aria-label="Suivant">→</button>
      </div>

      {/* Dot indicators (desktop) */}
      <div className={styles.dots}>
        {SHOPS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dotInd} ${i === idx ? styles.dotIndActive : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Boutique ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className={styles.ctaWrap}>
        <button className={styles.ctaBtn} onClick={scrollToOffer}>
          Je veux ma boutique à 39€ →
        </button>
      </div>
    </section>
  );
}
