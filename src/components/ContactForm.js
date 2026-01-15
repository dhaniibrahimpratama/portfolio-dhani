"use client"; // Wajib ada kalau ada interaksi (klik tombol)

export default function ContactForm() {
  
  // Fungsi ini jalan pas tombol diklik
  const simpanPesan = (e) => {
    e.preventDefault(); // Mencegah website refresh sendiri (kebiasaan lama HTML)
    alert("Pesan terkirim! (Padahal boongan dulu hehe)");
  };

  return (
    // <form> adalah pembungkus area input
    // onSubmit artinya: "Pas tombol dipencet, jalankan fungsi simpanPesan"
    <form onSubmit={simpanPesan} className="border border-white/20 p-6 rounded-lg bg-gray-900 max-w-md mx-auto mt-10">
      
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">Hubungi Saya</h2>

      {/* --- INPUT 1: NAMA --- */}
      <div className="mb-4">
        {/* <label> itu judul kecil di atas kotak */}
        <label className="block text-gray-300 mb-2">Nama Lengkap</label>
        
        {/* <input> itu kotaknya. 
            type="text" artinya isinya tulisan biasa.
            placeholder itu tulisan samar buat petunjuk.
        */}
        <input 
          type="text" 
          placeholder="Tulis nama kamu..." 
          className="w-full p-2 rounded bg-black border border-gray-700 text-white focus:border-blue-500 outline-none"
        />
      </div>

      {/* --- INPUT 2: EMAIL --- */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Email</label>
        {/* type="email" biar HP otomatis munculin tombol '@' di keyboard */}
        <input 
          type="email" 
          placeholder="contoh@email.com" 
          className="w-full p-2 rounded bg-black border border-gray-700 text-white focus:border-blue-500 outline-none"
        />
      </div>

      {/* --- INPUT 3: PESAN --- */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Pesan</label>
        {/* <textarea> buat isian panjang. rows="4" artinya tingginya 4 baris */}
        <textarea 
          rows="4"
          placeholder="Mau ngajak kerjasama projek apa?" 
          className="w-full p-2 rounded bg-black border border-gray-700 text-white focus:border-blue-500 outline-none"
        ></textarea>
      </div>

      {/* --- TOMBOL --- */}
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition"
      >
        Kirim Pesan 🚀
      </button>

    </form>
  );
}