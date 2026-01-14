import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  // PERUBAHAN 1: Tambahkan path gambar di sini
  // (Perhatikan tanda garis miring '/' di depan nama file)
  const projects = [
    { id: 1, nama: "Website Bioskop", bahasa: "Java", status: "Selesai", gambar: "/bioskop.jpg" },
    { id: 2, nama: "Alat Deteksi Jantung", bahasa: "C++", status: "Selesai", gambar: "/jantung.jpg" },
    { id: 3, nama: "IoT Smart Home", bahasa: "Arduino", status: "Proses", gambar: "/iot.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-10">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Portfolio Dhani (Suka Ngoding) Ibrahim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects">
          {projects.map((item) => (
            // PERUBAHAN 2: Jangan lupa kirim props 'gambar' di sini!
            <ProjectCard
              key={item.id}
              nama={item.nama}
              bahasa={item.bahasa}
              status={item.status}
              gambar={item.gambar} // <--- INI TAMBAHAN PENTING
            />
          ))}
        </div>
      </div>
    </div>
  );
}