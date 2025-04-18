import { Link } from 'react-router-dom';

export default function OpenSource() {
  return (
    <main className="min-h-screen bg-[#06063a] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-[#8a2be2] mb-8">Coming Soon...</h1>
      <Link
        to="/"
        className="mt-4 px-6 py-3 bg-[#3498db] text-white rounded-full hover:bg-[#30339d] transition"
      >
        Go Home
      </Link>
    </main>
  );
}
