import { Icons } from '../data';

export default function LiveMap({ isActive, a11y, onNavigate }) {
  if (!isActive) return null;

  return (
    <section className="screen active">
      <div className="back-row" style={{ paddingTop: '2px', marginBottom: 0 }}>
        <button className="icon-btn" onClick={() => onNavigate('journey')}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>
      
      <div className="map-wrap">
        <div className="map-canvas">
          <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g strokeWidth="1" stroke="var(--line)" opacity="0.6">
              <line x1="0" y1="80" x2="400" y2="80"/>
              <line x1="0" y1="160" x2="400" y2="160"/>
            </g>
            <path id="route-path" d="M40 340 C 100 300, 90 200, 170 190 S 300 120, 350 60" fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round"/>
            <circle cx="40" cy="340" r="7" fill="var(--green)"/>
            <circle cx="170" cy="190" r="7" fill="var(--amber)"/>
            <g>
              <circle r="11" fill="var(--accent)" stroke="var(--surface)" strokeWidth="3"/>
              <animateMotion dur={a11y.reduceMotion ? "9999s" : "9s"} repeatCount="indefinite" rotate="auto">
                <mpath href="#route-path"/>
              </animateMotion>
            </g>
          </svg>
        </div>
        
        <div className="track-sheet">
          <div className="track-status">
            <div className="track-status-ic">{Icons.bus}</div>
            <div><h3>Autonomous Bus 42</h3><p>On the way · arriving in 2 min</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}