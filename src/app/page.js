import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm"; // 1. Import dulu

export default function Home() {
  const projects = [
    { id: 1, nama: "Website Bioskop", bahasa: "Java", status: "Selesai", gambar: "/bioskop.jpg" },
    { id: 2, nama: "Alat Deteksi Jantung", bahasa: "C++", status: "Selesai", gambar: "/jantung.jpg" },
    { id: 3, nama: "IoT Smart Home", bahasa: "Arduino", status: "Proses", gambar: "/iot.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-10 pb-20"> {/* Tambah pb-20 biar bawahnya lega */}
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Portfolio Dhani (Suka Ngoding) Ibrahim
        </h1>

        {/* Bagian Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" id="projects">
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              nama={item.nama}
              bahasa={item.bahasa}
              status={item.status}
              gambar={item.gambar}
            />
          ))}
        </div>

        {/* 2. Bagian Contact Form Baru */}
        <div id="contact">
          <h2 className="text-3xl font-bold text-center mb-6">Hubungi Saya</h2>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}