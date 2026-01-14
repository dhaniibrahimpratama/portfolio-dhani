import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo / Nama */}
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Dhani Programmer Jago
        </h1>

        {/* Menu Link */}
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}