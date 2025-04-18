export function GadgetCard({ name, description, image, startedUsing }: { name: string; description: string; image: string; startedUsing: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl overflow-hidden w-full max-w-md mx-auto hover:scale-[1.01] transition-transform">
      <img src={image} alt={name} className="w-full h-60 object-contain bg-white dark:bg-zinc-800 p-6" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#30339d] dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">Started using: {startedUsing}</p>
        <button className="mt-4 px-4 py-2 rounded-md bg-[#3498db] text-white hover:bg-[#30339d]">Buy</button>
      </div>
    </div>
  )
}
