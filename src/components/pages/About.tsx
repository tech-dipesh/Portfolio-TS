import React from 'react';
import meImage from '@/assets/images/me.png';

export default function About() {
  return (
    <main className="min-h-screen bg-[#06063a] text-white px-6 py-20 flex flex-col items-start">
      <h2 className="text-3xl font-bold text-[#30339d] hover:text-[#3498db] transition-colors">
        I love TypeScript
      </h2>

      <div className="mt-6 text-lg leading-relaxed space-y-4">
        <p>👋 Hi! I’m Dipesh, a computer science student passionate about building apps from start to finish. Right now, I’m diving into tools like React, WebSocket, and TypeScript to create projects that solve real problems.</p>
        <p>💡 What I’m up to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Building a real-time chat app (like WhatsApp!) using WebSocket.</li>
          <li>Created a full-stack Airbnb-style clone with user bookings and listings.</li>
          <li>Learning Docker and Next.js to make my apps faster and more scalable.</li>
          <li>Solving coding puzzles daily on LeetCode to sharpen my logic.</li>
        </ul>
        <p>🔨 Why I love coding:</p>
        <p>Every project teaches me something new—whether it’s fixing bugs or designing clean interfaces. I’m currently working on a project with TypeScript, MERN, and Socket.IO.</p>
        <p>📫 Let’s connect if:</p>
        <ul className="list-disc list-inside ml-4">
          <li>You’re looking for a motivated intern ready to learn and contribute.</li>
          <li>You want to geek out about tech, projects, or career tips!</li>
        </ul>
        <p>P.S. I’ve also done the content writing and marketing, so feel free to chat about that too!</p>
        <p className="mt-4 font-semibold">Miscellaneous:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Hackathon Participant</li>
          <li>Quiz Competition Winner</li>
          <li>Wikipedia Writer</li>
        </ul>
      </div>

      <div className="mt-auto w-full flex justify-center">
        <img src={meImage} alt="Dipesh Sharma" className="w-40 h-40 rounded-full hover:scale-105 transition-transform" />
      </div>
    </main>
  );
}
