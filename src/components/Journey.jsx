import React, { useState } from 'react';
import { Icons } from '../data';

export default function Journey({ isActive, trip, onNavigate }) {
  const [showAlert, setShowAlert] = useState(true);

  if (!isActive || !trip) return null;

  return (
    <section className="screen active">
      <div className="back-row">
        <button className="icon-btn" onClick={() => onNavigate('home')}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div className="badge indigo">{Icons.air} AI-planned journey</div>
      </div>
      
      <div className="trip-head">
        <div className="trip-route">{trip.title}</div>
        <div className="trip-meta">{trip.meta}</div>
      </div>
      
      {showAlert && (
        <div className="alert-banner">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>
          <div>
            <strong>Air shuttle delayed 4 minutes</strong>
            <p>Light headwinds over the harbour district.</p>
          </div>
          <button className="alert-close" onClick={() => setShowAlert(false)}>X</button>
        </div>
      )}

      <div className="timeline">
        {trip.legs.map((leg, i) => {
          const isVehicle = ['bus', 'train', 'air'].includes(leg.mode);
          return (
            <div key={i} className="leg">
              <div className="leg-track">
                <div className={`leg-dot ${isVehicle ? 'mode-accent' : ''}`}>{Icons[leg.mode]}</div>
                {i !== trip.legs.length - 1 && <div className="leg-line"></div>}
              </div>
              <div className="leg-body">
                <div className="leg-top"><h4>{leg.title}</h4><span className="leg-time">{leg.time}</span></div>
                <div className="leg-sub">{leg.sub}</div>
                <div className="leg-tags">
                  {leg.wheelchair ? <span className="badge green">{Icons.wheelchair} Step-free</span> : <span className="badge red">Not step-free</span>}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="track-cta">
        <button className="btn btn-primary btn-block" onClick={() => onNavigate('map')}>Track this journey live</button>
      </div>
    </section>
  );
}