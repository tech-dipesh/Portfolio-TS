import { useEffect, useState } from 'react';

export default function useVisitorCounter(): number {
  const [visits, setVisits] = useState<number>(() => {

    const stored = window.localStorage.getItem('visitCount');
    return stored ? Number(stored) : Math.floor(Math.random() * 1000) + 1000;
  });

  //it will animate 
  const [displayCount, setDisplayCount] = useState<number>(0);
  
  useEffect(() => {
    // Increment the visitor count only once per session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      const newCount = visits + 1;
      setVisits(newCount);
      window.localStorage.setItem('visitCount', String(newCount));
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  useEffect(() => {
    // Animate counting up to the actual value
    let start = 0;
    const end = visits;
    const duration = 2000; // 2 seconds
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