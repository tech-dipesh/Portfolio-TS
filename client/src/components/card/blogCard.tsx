
// Enums type.
export type Blog = {
  title: string;
  description: string;
  thumbnail: string;
  date: string;
};

// Blogs types
export function BlogCard({
  title,
  description,
  thumbnail,
  date,
}: Blog) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 shadow hover:scale-[1.01] transition-transform">
      <h2 className="text-xl font-semibold text-[#30339d] dark:text-white mb-2">
        {title}
      </h2>
      <img
        src={thumbnail}
        alt={title}
        className="w-full rounded-lg mb-3 object-cover aspect-[16/9]"
      />
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        {description.split(' ').slice(0, 15).join(' ')}...
      </p>
      <div className="text-right text-xs text-[#8a2be2]">{date}</div>
    </div>
  );
}
