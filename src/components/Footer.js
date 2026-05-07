import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Agence CyberEdge. Tous droits réservés.</p>
      <p className={styles.links}>
        <a href="#">CGV</a> · <a href="#">Politique de confidentialité</a> · <a href="#">Garantie</a>
      </p>
      <p className={styles.disclaimer}>
        Ce site ne fait pas partie de Facebook / Meta. Agence CyberEdge est spécialisée dans la
        formation e-commerce. Aucun résultat garanti — le succès dépend de nombreux facteurs individuels.
      </p>
    </footer>
  );
}
