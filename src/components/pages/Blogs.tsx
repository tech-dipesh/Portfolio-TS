import { useMemo, useState } from 'react';
import { Blogs as blogData } from '../data/Blogs.ts';
interface Blog {
  title: string;
  content: string;
  description: string;
  author: string;
  date: string;
  thumbnail: string;
  tags: string[];
}

// for importing the blogs, blogcard and blog data ll of here, and use the strict types for the ts,
export default function Blogs() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const tags = ['All', ...new Set(blogData.flatMap((b:Blog) => b.tags))];

  const filtered = useMemo(
    () =>
      blogData.filter(
        (b) =>
          (activeTag === 'All' || b.tags.includes(activeTag)) &&
          b.title.toLowerCase().includes(search.toLowerCase())
      ),
    [search, activeTag]
  ); 
  // use the usememo for only rerendering only search and active tags, this is the search filter.

  return (
    <main className="min-h-screen bg-[#06063a] text-white px-6 py-20">
      <h2 className="text-3xl font-bold text-[#8a2be2] mb-4">Blogs & Articles</h2>
      <div className="flex flex-wrap mb-6 gap-2">
        <input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-[#30339d] focus:ring-2 focus:ring-[#3498db] flex-grow"
        />
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1 rounded-full text-sm ${
              activeTag === tag
                ? 'bg-[#8a2be2] text-[#06063a]'
                : 'bg-[#30339d] text-white hover:bg-[#3498db]'
            } transition`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((b, idx) => (
          <div
            key={idx}
            className="bg-[#30339d] p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold text-[#8a2be2] mb-2">{b.title}</h3>
            <img src={b.thumbnail} alt={b.title} className="w-full rounded mb-3" />
            <p className="text-gray-200 mb-2">
              {b.content.split(' ').slice(0, 15).join(' ')}...
              {/* only the first 15 word showing with the slice method not splice  */}
            </p>
            <div className="flex justify-between text-sm text-gray-400">
              <span>By {b.author}</span>
              <span>{b.date}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
