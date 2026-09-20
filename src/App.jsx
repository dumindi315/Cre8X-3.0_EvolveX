import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Journey from './components/Journey';
import LiveMap from './components/LiveMap';
import { TRIPS } from './data';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [currentTripId, setCurrentTripId] = useState('commute');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const [a11y, setA11y] = useState({
    largeText: false, highContrast: false, wheelchairOnly: false, comfortOnly: false, reduceMotion: false
  });

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-large', a11y.largeText);
    document.documentElement.classList.toggle('a11y-contrast', a11y.highContrast);
    document.documentElement.classList.toggle('a11y-reduce-motion', a11y.reduceMotion);
  }, [a11y]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2600);
  };

  const navigate = (screen, tripId = null) => {
    if (tripId) setCurrentTripId(tripId);
    setActiveScreen(screen);
  };

  const toggleA11y = (key) => setA11y(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div id="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-text">Wayline</div>
        </div>
        <button className="icon-btn" onClick={() => setSettingsOpen(true)}>⚙️</button>
      </header>

      <main>
        <Home isActive={activeScreen === 'home'} a11y={a11y} toggleA11y={toggleA11y} onNavigate={navigate} showToast={showToast} />
        <Journey isActive={activeScreen === 'journey'} trip={TRIPS[currentTripId]} onNavigate={navigate} />
        <LiveMap isActive={activeScreen === 'map'} a11y={a11y} onNavigate={navigate} />
      </main>

      <nav className="tabbar">
        <button className={`tab ${activeScreen === 'home' ? 'active' : ''}`} onClick={() => navigate('home')}>Home</button>
        <button className={`tab ${activeScreen === 'journey' ? 'active' : ''}`} onClick={() => navigate('journey')}>Journey</button>
        <button className={`tab ${activeScreen === 'map' ? 'active' : ''}`} onClick={() => navigate('map')}>Live Map</button>
      </nav>

      {/* Settings Overlay */}
      <div className={`overlay ${settingsOpen ? 'open' : ''}`}>
        <div className="overlay-bg" onClick={() => setSettingsOpen(false)}></div>
        <div className="sheet">
          <div className="sheet-head">
            <h2>Accessibility Settings</h2>
            <button className="close-x" onClick={() => setSettingsOpen(false)}>X</button>
          </div>
          <div className="setting-row">
            <h4>Large text</h4>
            <div className={`switch ${a11y.largeText ? 'on' : ''}`} onClick={() => toggleA11y('largeText')}></div>
          </div>
          <div className="setting-row">
            <h4>High contrast</h4>
            <div className={`switch ${a11y.highContrast ? 'on' : ''}`} onClick={() => toggleA11y('highContrast')}></div>
          </div>
        </div>
      </div>

      <div className={`toast ${toastMsg ? 'show' : ''}`}>{toastMsg}</div>
    </div>
  );
}