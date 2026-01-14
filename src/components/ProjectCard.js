"use client"; // 1. Mantra Wajib biar bisa interaktif (diklik)
import { useState } from "react"; // 2. Import "Otak" memori React

export default function ProjectCard({ nama, bahasa, status }) {
  // 3. Ini State: variabel 'likes' mulai dari 0. 'setLikes' adalah tombol pengubahnya.
  const [likes, setLikes] = useState(0);

  return (
    <div className="border border-white/20 p-6 rounded-lg hover:bg-white/10 transition flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-blue-400">{nama}</h2>
        <p className="mt-2 text-gray-300">🛠️ Tech: {bahasa}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        {/* Badge Status */}
        <div className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-full">
          {status}
        </div>

        {/* 4. Tombol Like Interaktif */}
        <button 
          onClick={() => setLikes(likes + 1)} 
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-3 py-1 rounded transition"
        >
          👍 {likes} Like
        </button>
      </div>
    </div>
  );
}