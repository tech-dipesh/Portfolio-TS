

// GadgetCard Component
export function GadgetCard({ name, description, image }: { name: string; description: string; image: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl overflow-hidden w-full max-w-xs mx-auto hover:scale-[1.01] transition-transform">
      <img src={image} alt={name} className="w-full aspect-[16/9] object-contain p-3" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#30339d] dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        <button className="mt-4 bg-[#3498db] text-white hover:bg-[#30339d]">Buy</button>
      </div>
    </div>
  )
}