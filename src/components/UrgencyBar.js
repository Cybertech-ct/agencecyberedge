import React, { useState, useEffect } from 'react';
import styles from './UrgencyBar.module.css';

const DAILY_MAX = 15;
const DAILY_DONE = 11;

function getParisTime() {
  return new Date().toLocaleTimeString('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getTodayLabel() {
  return new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).replace(/^\w/, c => c.toUpperCase());
}

export default function UrgencyBar() {
  const [time, setTime] = useState(getParisTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getParisTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  const pct = Math.round((DAILY_DONE / DAILY_MAX) * 100);

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <p className={styles.title}>
          🚀 <strong>{getTodayLabel()}</strong> — Créations du jour
        </p>
        <p className={styles.sub}>
          On limite les créations quotidiennes pour garantir une livraison en 24h
        </p>

        <div className={styles.countLine}>
          <span className={styles.countText}>
            <strong>{DAILY_DONE} boutiques</strong> créées aujourd'hui
          </span>
          <span className={styles.countMax}>sur {DAILY_MAX}</span>
        </div>

        <div className={styles.trackWrap}>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className={styles.liveRow}>
          <span className={styles.liveDot} />
          <span className={styles.liveText}>
            Mis à jour à <strong>{time}</strong> (heure de Paris)
          </span>
        </div>

        <p className={styles.cap}>Capacité journalière : {DAILY_MAX} créations maximum</p>
      </div>
    </div>
  );
}
