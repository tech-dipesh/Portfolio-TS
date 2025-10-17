import { Infinity as InfinityLoader } from 'ldrs/react';

export default function Loader() {
  return (
    <div className="fixed top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2">
      <InfinityLoader
        size={200}
        stroke={4}
        strokeLength={0.15}
        bgOpacity={0.1}
        speed={1.3}
        color="black"
      />
    </div>
  );
}