
export const Icons = {
  walk: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="4" r="2"/><path d="M15 8 12 9l-2 6 3 6M9 15l-3 1-2 5M10 10l3 1 3-2"/></svg>,
  bus: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17h16M4 17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M4 17V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8M7 21l-1-2M18 21l1-2M8 13h.01M16 13h.01"/></svg>,
  train: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="14" rx="4"/><path d="M5 12h14M9 17l-2 4M15 17l2 4"/><circle cx="9" cy="8" r="1"/><circle cx="15" cy="8" r="1"/></svg>,
  air: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>,
  transfer: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h11l-3-3m3 3-3 3M17 17H6l3 3m-3-3 3-3"/></svg>,
  wheelchair: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="5" r="2"/><path d="M8 8v5l4 2m-4-2-3 7M12 15l6 2 1-3M9 13h6"/></svg>,
  crowd: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><circle cx="18" cy="8" r="2.5"/><path d="M22 21v-1.5a4 4 0 0 0-3-3.87"/></svg>,
  air2: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h9a2.5 2.5 0 1 0-2-4M4 14h13a2.5 2.5 0 1 1-2 4M4 18h8"/></svg>
};

export const TRIPS = {
  commute: {
    title: 'Home → Meridian Transit Hub',
    meta: 'Depart 8:00 AM · Arrive 8:41 AM · 41 min · 3 legs',
    accessible: true,
    suggestLabel: 'Home → Meridian Transit Hub',
    suggestSub: 'Your usual weekday commute · 41 min',
    icon: 'train',
    legs: [
      { mode: 'walk', title: 'Walk to Riverside Stop', sub: '0.3 km · 4 min', time: '8:00 AM', wheelchair: true },
      { mode: 'bus', title: 'Autonomous Bus 42', sub: 'Riverside Stop → Skyport Interchange', time: '8:04 AM', wheelchair: true, crowd: 'Low', air: 'Fresh' },
      { mode: 'transfer', title: 'Transfer at Skyport Interchange', sub: 'Covered walkway', time: '8:19 AM', wheelchair: true },
      { mode: 'air', title: 'Air Shuttle A7', sub: 'Skyport Interchange → Harbour Deck', time: '8:22 AM', wheelchair: true, crowd: 'Medium', air: 'Fresh' },
      { mode: 'train', title: 'Autonomous Train', sub: 'Harbour Deck → Meridian Transit Hub', time: '8:34 AM', wheelchair: true, crowd: 'Low', air: 'Normal' }
    ]
  },
  airport: {
    title: 'Home → Colombo International Airport',
    meta: 'Depart 4:10 PM · Arrive 5:35 PM · 1 h 25 min · 2 legs',
    accessible: true,
    suggestLabel: 'To Colombo International Airport',
    suggestSub: 'Flight check-in reminder · 1 h 25 min',
    icon: 'air',
    legs: [
      { mode: 'walk', title: 'Walk to Elm Street', sub: '0.2 km · 3 min', time: '4:10 PM', wheelchair: true },
      { mode: 'bus', title: 'Autonomous Smart-Road Pod', sub: 'Elm Street → Central Air Terminal', time: '4:13 PM', wheelchair: true, crowd: 'Low', air: 'Fresh' },
      { mode: 'air', title: 'Air Shuttle C2', sub: 'Central Air Terminal → Airport Gate 3', time: '4:55 PM', wheelchair: true, crowd: 'Medium', air: 'Normal' }
    ]
  }
};