import { Icons, TRIPS } from '../data';

export default function Home({ isActive, a11y, toggleA11y, onNavigate }) {
  if (!isActive) return null;

  return (
    <section className="screen active">
      <div className="greeting">
        <h1>Good morning, Nadeesha</h1>
        <p>Where would you like to go today?</p>
      </div>

      <div className="city-strip">
        <div className="city-strip-item">
          {Icons.bus()}
          <span>Traffic: Light</span>
        </div>
        <div className="city-strip-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>
          <span>27°C, clear</span>
        </div>
      </div>

      <div className="search-wrap">
        <div className="search-bar">
          <svg className="search-ic" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input type="text" placeholder="Where to?" />
          <button className="mic-btn">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
        </div>
      </div>

      <div className="pill-row" style={{ marginTop: '20px' }}>
        <button className={`pill ${a11y.wheelchairOnly ? 'on' : ''}`} onClick={() => toggleA11y('wheelchairOnly')}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          Wheelchair-friendly only
        </button>
      </div>

      <button className="predict-card" onClick={() => onNavigate('journey', 'commute')}>
        <div className="predict-ic">
          {Icons.train()}
        </div>
        <div>
          <h3>Your weekday route is ready</h3>
          <p>{TRIPS.commute.title}. Based on your usual commute.</p>
        </div>
      </button>

      <h3 className="section-title">Suggested for you</h3>
      
      <button className="suggest-card" onClick={() => onNavigate('journey', 'commute')}>
        <div className="suggest-ic">
          {Icons.train()}
        </div>
        <div className="suggest-body">
          <h4>{TRIPS.commute.title}</h4>
          <p>Your usual weekday commute · 1 h 5 min</p>
        </div>
      </button>

      <button className="suggest-card" onClick={() => onNavigate('journey', 'flight')}>
        <div className="suggest-ic">
          {Icons.bus()}
        </div>
        <div className="suggest-body">
          <h4>{TRIPS.flight.title}</h4>
          <p>Flight check-in reminder · 1 h 25 min</p>
        </div>
      </button>

    </section>
  );
}