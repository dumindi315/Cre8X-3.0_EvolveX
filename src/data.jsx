export const Icons = {
  bus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/><path d="M6 18v2"/><path d="M18 18v2"/></svg>,
  train: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="M8 19l-2 3"/><path d="M16 19l2 3"/><path d="M8 15h.01"/><path d="M16 15h.01"/></svg>,
  walk: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M14 20l-1.5-5.5L15 13l-3.5-2.5L9.5 13 8 20"/><path d="M11.5 10.5L9 6l2-2 4 2 2.5 4.5"/></svg>,
  transfer: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>,
  shuttle: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l-3.5-3.5C11.7 6.7 10.5 6 9 6H4v2h5c1.1 0 2 .4 2.8 1.2l2.6 2.6L13 18h2.2l1-4.5 1.6 5.7z"/><circle cx="7" cy="18" r="2"/></svg>
};

export const TRIPS = {
  commute: {
    id: 'commute',
    title: 'Kalutara → 99x',
    time: 'Depart 7:00 AM · Arrive 8:05 AM · 1 h 5 min · 3 legs',
    alert: {
      type: 'amber',
      title: 'Train delayed 5 minutes',
      desc: 'Speed restrictions near Panadura station.'
    },
    legs: [
      {
        id: 1,
        type: 'walk',
        title: 'Walk to Kalutara South Station',
        time: '7:00 AM',
        sub: '0.8 km · 10 min',
        icon: Icons.walk(),
        tags: ['Step-free']
      },
      {
        id: 2,
        type: 'train',
        title: 'Samudra Devi Express',
        time: '7:15 AM',
        sub: 'Kalutara South → Kollupitiya',
        icon: Icons.train(),
        tags: ['Crowded'],
        mode: 'accent'
      },
      {
        id: 3,
        type: 'walk',
        title: 'Walk to 99x (No 65, Walukarama Rd)',
        time: '8:00 AM',
        sub: '0.4 km · 5 min',
        icon: Icons.walk(),
        tags: ['Step-free']
      }
    ]
  },
  flight: {
    id: 'flight',
    title: 'To Colombo International Airport',
    time: 'Depart 4:30 PM · Arrive 5:55 PM · 1 h 25 min · 2 legs',
    alert: null,
    legs: [
      {
        id: 1,
        type: 'bus',
        title: 'Express Highway Bus',
        time: '4:30 PM',
        sub: 'Colombo Fort → Katunayake',
        icon: Icons.bus(),
        tags: ['Air-conditioned'],
        mode: 'accent'
      },
      {
        id: 2,
        type: 'walk',
        title: 'Walk to Terminal 1',
        time: '5:45 PM',
        sub: '0.2 km · 10 min',
        icon: Icons.walk(),
        tags: ['Step-free']
      }
    ]
  }
};