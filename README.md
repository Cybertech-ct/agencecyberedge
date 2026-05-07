# Agence CyberEdge — Landing Page React

Landing page redesignée pour Agence CyberEdge, construite avec React et CSS Modules.

## 🚀 Démarrer le projet

### Prérequis
- Node.js 16+ installé sur ta machine
- npm ou yarn

### Installation

```bash
# 1. Ouvre ce dossier dans VS Code

# 2. Dans le terminal intégré (Ctrl + ` ), installe les dépendances :
npm install

# 3. Lance le serveur de développement :
npm start
```

Le site s'ouvrira automatiquement sur **http://localhost:3000**

## 📁 Structure du projet

```
src/
├── App.js                    # Composant racine — assemble toutes les sections
├── index.js                  # Point d'entrée React
├── index.css                 # Variables CSS globales + reset
└── components/
    ├── Navbar.js / .module.css
    ├── Hero.js / .module.css
    ├── TrustBar.js / .module.css
    ├── HowItWorks.js / .module.css
    ├── Offer.js / .module.css
    ├── About.js / .module.css
    ├── FAQ.js / .module.css
    ├── FinalCTA.js / .module.css
    └── Footer.js / .module.css
```

## 🎨 Palette de couleurs

Les couleurs sont définies comme variables CSS dans `src/index.css` :

| Variable       | Valeur    | Usage                        |
|----------------|-----------|------------------------------|
| `--black`      | `#0a0a0a` | Fond sombre, textes          |
| `--cream`      | `#f4f1ea` | Fond principal               |
| `--gold`       | `#c9a84c` | Accent principal             |
| `--gold-dark`  | `#8a6c2a` | Labels, hover                |
| `--green`      | `#2a6b3c` | Badges de statut             |

## 🔧 Build pour la production

```bash
npm run build
```

Le dossier `build/` contiendra les fichiers prêts à déployer (Netlify, Vercel, etc.).
# agencecyberedge
