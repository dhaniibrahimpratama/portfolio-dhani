"use client";
import { useState } from "react";
import Image from "next/image"; // 1. Import alat Penampil Gambar Canggih

// 2. Terima props 'gambar' di sini
export default function ProjectCard({ nama, bahasa, status, gambar }) {
  const [likes, setLikes] = useState(0);

  return (
    // Tambahkan 'overflow-hidden' biar gambar gak keluar dari sudut yang tumpul
    <div className="border border-white/20 p-6 rounded-lg hover:bg-white/10 transition flex flex-col justify-between overflow-hidden h-full">
      
      {/* 3. Area Penampil Gambar (ditaruh paling atas) */}
      {/* Trik CSS: margin negatif (-mt-6 -mx-6) biar gambarnya nempel ke pinggir kartu */}
      {/* Tambahkan 'flex justify-center items-center' agar isinya di tengah secara horizontal dan vertikal */}
      {/* Ganti bg-gray-900/50 jadi bg-white, dan hapus p-2 biar gambar makin besar */}
      <div className="relative w-full h-48 mb-4 -mt-6 -mx-6 bg-white flex justify-center items-center">
        <Image
          src={gambar}
          alt={nama}
          fill
          className="object-contain" // Hapus p-2 biar gambar pol mentok pinggir
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Area Konten Teks */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-blue-400">{nama}</h2>
        <p className="mt-2 text-gray-300">🛠️ Tech: {bahasa}</p>
      </div>

      {/* Area Tombol Bawah */}
      <div className="mt-4 flex justify-between items-center">
        <div className={`text-xs px-2 py-1 rounded-full ${status === 'Selesai' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
          {status}
        </div>

        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-3 py-1 rounded transition flex items-center gap-1"
        >
          👍 {likes} Like
        </button>
      </div>
    </div>
  );
}