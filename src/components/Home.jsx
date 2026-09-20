import React, { useState } from 'react';
import { Icons, TRIPS } from '../data';

export default function Home({ isActive, a11y, toggleA11y, onNavigate, showToast }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    showToast(`Planning your route to "${searchInput.trim()}"…`);
    setTimeout(() => onNavigate('journey', 'commute'), 500);
  };

  if (!isActive) return null;

  return (
    <section className="screen active">
      <div className="greeting">
        <h1>Good morning, Nadeesha</h1>
        <p>Where would you like to go today?</p>
      </div>

      <div className="city-strip">
        <div className="city-strip-item">{Icons.bus} Traffic: Light</div>
        <div className="city-strip-item">{Icons.air} 27°C, clear</div>
      </div>

      <div className="search-wrap">
        <div className="search-bar">
          <svg className="search-ic" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <input value={searchInput} onChange={e => setSearchInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSearch()} type="text" placeholder="Where to?" />
          <button className="mic-btn" onClick={() => showToast('Voice search clicked!')}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/></svg>
          </button>
        </div>
      </div>

      <div className="pill-row" style={{ marginTop: '14px' }}>
        <button className={`pill ${a11y.wheelchairOnly ? 'on' : ''}`} onClick={() => toggleA11y('wheelchairOnly')}>
          {Icons.wheelchair} Wheelchair-friendly only
        </button>
      </div>

      <button className="predict-card" onClick={() => onNavigate('journey', 'commute')}>
        <div className="predict-ic">{Icons.air}</div>
        <div>
          <h3>Your weekday route is ready</h3>
          <p>Home → Meridian Transit Hub. Based on your usual commute.</p>
        </div>
      </button>

      <div className="section-title">Suggested for you</div>
      {Object.keys(TRIPS).filter(id => !a11y.wheelchairOnly || TRIPS[id].accessible).map(id => (
        <button key={id} className="suggest-card" onClick={() => onNavigate('journey', id)}>
          <div className="suggest-ic">{Icons[TRIPS[id].icon]}</div>
          <div className="suggest-body"><h4>{TRIPS[id].suggestLabel}</h4><p>{TRIPS[id].suggestSub}</p></div>
        </button>
      ))}
    </section>
  );
}