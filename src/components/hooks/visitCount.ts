import { useEffect, useState } from 'react';

export default function useVisitorCounter(): number {
  const [visits, setVisits] = useState<number>(() => {
    //it will have the default 0
    const stored = window.localStorage.getItem('visitCount');
    return stored ? Number(stored) : 0;
  });

  useEffect(() => {
    //this is the increasing every time. notes: 
    const newCount = visits + 1;
    setVisits(newCount);
    window.localStorage.setItem('visitCount', String(newCount));
  }, []);
  //  it will run once when mount notees:

  return visits;
}
