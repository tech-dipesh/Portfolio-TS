import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import gadgets from '@/assets/gadgets'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// GadgetCard Component
export function GadgetCard({ name, description, image }: { name: string; description: string; image: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl overflow-hidden w-full max-w-xs mx-auto hover:scale-[1.01] transition-transform">
      <img src={image} alt={name} className="w-full aspect-[16/9] object-contain p-3" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#30339d] dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        <Button className="mt-4 bg-[#3498db] text-white hover:bg-[#30339d]">Buy</Button>
      </div>
    </div>
  )
}

// BlogCard Component
export function BlogCard({ title, description, image, tag, date }: { title: string; description: string; image: string; tag: string; date: string }) {
  return (
    <div className="border border-gray-300 dark:border-zinc-700 rounded-xl p-4 bg-white dark:bg-zinc-900 shadow hover:scale-[1.01] transition-transform">
      <h2 className="text-xl font-semibold text-[#30339d] dark:text-white mb-2">{title}</h2>
      <img src={image} alt={title} className="w-full rounded-lg mb-3" />
      <h5 className="text-gray-600 dark:text-gray-300 mb-2">{description.split(" ").slice(0, 15).join(" ")}...</h5>
      <p className="text-sm text-gray-500 dark:text-gray-400">By Dipesh Sharma</p>
      <div className="text-right text-xs text-[#8a2be2] mt-2">{date}</div>
    </div>
  )
}

// BlogPage with search and tags
export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const blogs = [
    { title: 'Next.js Routing Deep Dive', tag: 'Next.js', image: '/blog1.jpg', description: 'Understanding dynamic and nested routing in Next.js applications for optimal code structure.', date: '2025/02/25' },
    { title: 'Streaming with m3u8 in JS', tag: 'm3u8', image: '/blog2.jpg', description: 'Learn how to handle m3u8 HLS streaming playlists and display them smoothly in JavaScript apps.', date: '2025/02/25' },
    { title: 'TypeScript vs JavaScript', tag: 'ts', image: '/blog3.jpg', description: 'A comparison between JavaScript and TypeScript in terms of performance, readability, and scalability.', date: '2025/02/25' },
  ]

  const filteredBlogs = useMemo(() => {
    return blogs.filter(
      blog =>
        (filter === 'All' || blog.tag === filter) &&
        blog.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, filter])

  const tags = ['All', 'Next.js', 'Node.js', 'm3u8', 'js', 'ts']

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <Input placeholder="Search blog..." value={search} onChange={e => setSearch(e.target.value)} className="w-60" />
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? 'default' : 'outline'}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map(blog => (
          <Link to="/" key={blog.title}>
            <BlogCard {...blog} />
          </Link>
        ))}
      </div>
    </div>
  )
}