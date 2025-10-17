import { useEffect, useState } from 'react';

export default function useVisitorCounter(): number {
  const [visits, setVisits] = useState<number>(() => {
// i have added the logic for the total visitor ocunt, 
    const stored = window.localStorage.getItem('visitCount');
    return stored ? Number(stored) : Math.floor(Math.random() * 1000) + 1000;
  });

  // animating the total vistioro count
  const [displayCount, setDisplayCount] = useState<number>(0);
  
  useEffect(() => {
    // the total visit only increase logic which i have done using the localstorage
    const hasVisited = sessionStorage.getItem('hasVisited');

    // increase by 1 per time
    if (!hasVisited) {
      const newCount = visits + 1;
      setVisits(newCount);
      window.localStorage.setItem('visitCount', String(newCount));
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [visits]);

  useEffect(() => {
    // counting from 0 to that count per 16 ms. and it wil lcomplete on the 2 sec.
    let start = 0;
    const end = visits;
    const duration = 2000; 
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [visits]);

  return displayCount;
}