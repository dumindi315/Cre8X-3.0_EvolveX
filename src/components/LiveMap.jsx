import { useState } from 'react';
import { Icons } from '../data';

export default function LiveMap({ isActive, onNavigate }) {
  const [activeRoute, setActiveRoute] = useState('commute');

  if (!isActive) return null;

  return (
    <section className="screen active">
      <div className="back-row" style={{ paddingBottom: '16px' }}>
        <button className="icon-btn" onClick={() => onNavigate('home')}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <h2 style={{ fontSize: '1.25rem', margin: 0, fontWeight: '700' }}>Live Tracking</h2>
      </div>

      <div className="pill-row" style={{ marginBottom: '16px' }}>
        <button 
          className={`pill ${activeRoute === 'commute' ? 'on' : ''}`} 
          onClick={() => setActiveRoute('commute')}
        >
          {Icons.train()} Kalutara → 99x
        </button>
        <button 
          className={`pill ${activeRoute === 'flight' ? 'on' : ''}`} 
          onClick={() => setActiveRoute('flight')}
        >
          {Icons.bus()} Colombo → Katunayake
        </button>
      </div>

      <div className="map-wrap">
        <div className="map-canvas">
          <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            {activeRoute === 'commute' ? (
              <>
                {/* Kalutara to 99x Route Path */}
                <path id="path-commute" d="M 80,350 C 120,250 180,180 250,60" fill="none" stroke="var(--line)" strokeWidth="4" strokeDasharray="8 8" />
                
                {/* Main Points */}
                <circle cx="80" cy="350" r="8" fill="var(--indigo)" />
                <text x="95" y="355" fontSize="14" fill="var(--ink)" fontWeight="bold">Kalutara</text>
                
                {/* Intermediate Real Cities */}
                <circle cx="110" cy="275" r="5" fill="var(--ink-soft)" />
                <text x="122" y="279" fontSize="12" fill="var(--ink-soft)">Panadura</text>

                <circle cx="158" cy="190" r="5" fill="var(--ink-soft)" />
                <text x="170" y="194" fontSize="12" fill="var(--ink-soft)">Moratuwa</text>

                <circle cx="215" cy="110" r="5" fill="var(--ink-soft)" />
                <text x="227" y="114" fontSize="12" fill="var(--ink-soft)">Kollupitiya</text>

                {/* Destination */}
                <circle cx="250" cy="60" r="10" fill="var(--accent)" />
                <text x="265" y="65" fontSize="14" fill="var(--ink)" fontWeight="bold">99x</text>
                
                <g>
                  <circle cx="0" cy="0" r="12" fill="var(--green)" />
                  <circle cx="0" cy="0" r="6" fill="#fff" />
                  <animateMotion dur="10s" repeatCount="indefinite">
                    <mpath href="#path-commute" />
                  </animateMotion>
                </g>
              </>
            ) : (
              <>
                {/* Colombo Fort to Katunayake Route Path */}
                <path id="path-flight" d="M 120,320 C 180,250 220,150 300,80" fill="none" stroke="var(--line)" strokeWidth="4" strokeDasharray="8 8" />
                
                {/* Main Points */}
                <circle cx="120" cy="320" r="8" fill="var(--indigo)" />
                <text x="135" y="325" fontSize="14" fill="var(--ink)" fontWeight="bold">Colombo Fort</text>

                {/* Intermediate Real Cities */}
                <circle cx="160" cy="245" r="5" fill="var(--ink-soft)" />
                <text x="172" y="249" fontSize="12" fill="var(--ink-soft)">Peliyagoda</text>

                <circle cx="218" cy="155" r="5" fill="var(--ink-soft)" />
                <text x="230" y="159" fontSize="12" fill="var(--ink-soft)">Ja-Ela</text>
                
                {/* Destination */}
                <circle cx="300" cy="80" r="10" fill="var(--amber)" />
                <text x="150" y="75" fontSize="14" fill="var(--ink)" fontWeight="bold">Airport (Katunayake)</text>
                
                <g>
                  <circle cx="0" cy="0" r="12" fill="var(--accent)" />
                  <circle cx="0" cy="0" r="6" fill="#fff" />
                  <animateMotion dur="8s" repeatCount="indefinite">
                    <mpath href="#path-flight" />
                  </animateMotion>
                </g>
              </>
            )}
          </svg>
        </div>
        
        <div className="track-sheet">
          <div className="track-status">
            <div className="track-status-ic">
              {activeRoute === 'commute' ? Icons.train() : Icons.bus()}
            </div>
            <div>
              <h3>{activeRoute === 'commute' ? 'Samudra Devi Express' : 'Express Highway Bus'}</h3>
              <p>On the way · arriving in {activeRoute === 'commute' ? '25 min' : '45 min'}</p>
            </div>
          </div>

          <div className="track-grid">
            <div className="track-stat">
              <span>Current Speed</span>
              <strong>{activeRoute === 'commute' ? '65 km/h' : '85 km/h'}</strong>
            </div>
            <div className="track-stat">
              <span>Next Stop</span>
              <strong>{activeRoute === 'commute' ? 'Moratuwa' : 'Peliyagoda'}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}