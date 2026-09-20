import { useState } from 'react';

export default function Journey({ isActive, trip, onNavigate }) {
  const [alertOpen, setAlertOpen] = useState(true);
  
  if (!isActive || !trip) return null;

  return (
    <section className="screen active">
      <div className="back-row">
        <button className="icon-btn" onClick={() => onNavigate('home')}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <span className="badge indigo">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.5 7.5"/></svg>
          AI-planned journey
        </span>
      </div>
      
      <div className="trip-head">
        <h1 className="trip-route">{trip.title}</h1>
        <div className="trip-meta">{trip.time}</div>
      </div>

      {trip.alert && alertOpen && (
        <div className="alert-banner">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <div>
            <strong>{trip.alert.title}</strong>
            <p>{trip.alert.desc}</p>
          </div>
          <button className="alert-close" onClick={() => setAlertOpen(false)}>X</button>
        </div>
      )}

      <div className="timeline">
        {trip.legs.map((leg, idx) => (
          <div className="leg" key={leg.id}>
            <div className="leg-track">
              <div className={`leg-dot ${leg.mode === 'accent' ? 'mode-accent' : ''}`}>
                
                {leg.icon}
              </div>
              {idx < trip.legs.length - 1 && <div className="leg-line"></div>}
            </div>
            <div className="leg-body">
              <div className="leg-top">
                <h4>{leg.title}</h4>
                <span className="leg-time">{leg.time}</span>
              </div>
              <div className="leg-sub">{leg.sub}</div>
              {leg.tags && (
                <div className="leg-tags">
                  {leg.tags.map(tag => (
                    <span key={tag} className={tag === 'Step-free' ? 'badge green' : 'badge red'}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="track-cta">
        <button className="btn btn-primary btn-block" onClick={() => onNavigate('map')}>
          Track this journey live
        </button>
      </div>
    </section>
  );
}