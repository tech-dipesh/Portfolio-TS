import { useEffect } from 'react'
import { infinity } from 'ldrs'

export default function Loader() {
  const InfinityLoader = 'l-infinity' as any;
  useEffect(() => {
    infinity.register()
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <InfinityLoader
        size="200"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="black"
      />
    </div>
  )
}
