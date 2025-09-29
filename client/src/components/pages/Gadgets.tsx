import { Gadgets as Gadget } from '../data/Gadget.ts';
// using the gadgets total content as a page 
export default function Gadgets() {
  return (
    <main className="min-h-screen bg-[#06063a] text-white px-6 py-20">
      <h2 className="text-3xl font-bold text-[#8a2be2] mb-8">Gadgets I Use</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Gadget.map((g, idx) => (
          <div
            key={idx}
            className="bg-[#30339d] p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <img src={g.image} alt={g.name} className="w-full aspect-[16/9] object-contain mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{g.name}</h3>
            <p className="text-gray-200 mb-2">{g.description}</p>
            <p className="text-sm italic text-[#3498db]">
              Started: {new Date(g.startedUsing).toLocaleString('default', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
