export default function Footer() {
  return (
    // Tag <footer>: Tag spesial HTML untuk bagian kaki website
    <footer className="border-t border-white/10 mt-20 py-8 text-center text-gray-400">
      
      {/* Paragraf 1: Copyright */}
      <p className="mb-2 text-sm">
        {/* &copy; adalah kode rahasia HTML untuk memunculkan simbol © */}
        &copy; 2026 Dhani Ibrahim. All Rights Reserved.
      </p>

      {/* Paragraf 2: Credits */}
      <p className="text-xs">
        Dibuat dengan <span className="text-red-500">❤️</span> dan Kopi ☕
      </p>
      
    </footer>
  );
}