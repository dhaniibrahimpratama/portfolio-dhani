import Navbar from "@/components/Navbar"; // 1. Import Navbar
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    { id: 1, nama: "Website Bioskop", bahasa: "Java", status: "Selesai" },
    { id: 2, nama: "Alat Deteksi Jantung", bahasa: "C++", status: "Selesai" },
    { id: 3, nama: "IoT Smart Home", bahasa: "Arduino", status: "Proses" },
  ];

  return (
    // Tambahkan 'pt-24' (padding top) biar konten gak ketutup Navbar
    <div className="min-h-screen bg-black text-white pt-24 px-10"> 
      
      {/* 2. Pasang Navbar di paling atas */}
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Dhani (Suka Ngoding) Ibrahim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects">
          {projects.map((item) => (
            <ProjectCard 
              key={item.id} 
              nama={item.nama} 
              bahasa={item.bahasa} 
              status={item.status} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}