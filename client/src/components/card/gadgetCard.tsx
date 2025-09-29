
// Gadget data memeber types.
export type Gadget = {
  name: string;
  description: string;
  image: string;
  startedUsing: string;
};

export function GadgetCard({ name, description, image }: Gadget) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl overflow-hidden w-full max-w-xs mx-auto hover:scale-[1.01] transition-transform">
      <img
        src={image}
        alt={name}
        className="w-full aspect-[16/9] object-contain p-3"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#30339d] dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
