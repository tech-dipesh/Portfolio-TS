import React from 'react'

export default function Projects() {
  const projects = [
    {
      name: 'Mega Project Listings',
      description: 'Build a project similar to the Airbnb clone, first backend project, understanding multiple concepts. Fully fledged full stack project using MERN stack, showcasing developer tools used daily.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'Bootstrap', 'EJS'],
      dateFinished: '2025-01',
      github: 'https://github.com/dj'
    },
    {
      name: 'Daily Stack',
      description: 'Build a project similar to the Airbnb clone, first backend project, understanding multiple concepts. Fully fledged full stack project using MERN stack, showcasing developer tools used daily.',
      techStack: ['Node.js', 'React', 'JavaScript', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Passport.js'],
      dateFinished: '2025-03',
      github: 'https://github.com/ja'
    }
  ]

  return (
    <main className="min-h-screen bg-[#06063a] text-white px-6 py-20">
      <h2 className="text-3xl font-bold text-[#8a2be2] mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-[#30339d] p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-4">{proj.name}</h3>
            <p className="mb-4 text-gray-100">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.techStack.map((tech, i) => (
                <span key={i} className="bg-[#3498db] px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm italic">Finished: {proj.dateFinished}</span>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[#8a2be2] hover:underline">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
