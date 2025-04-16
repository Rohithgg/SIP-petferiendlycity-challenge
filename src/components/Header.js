"use client"
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-teal-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🐾</span> Pet-Friendly City
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-teal-200 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-200 transition-colors">About</Link></li>
            <li><Link href="/initiatives" className="hover:text-teal-200 transition-colors">Initiatives</Link></li>
            <li><Link href="/movement" className="hover:text-teal-200 transition-colors">Our Movement</Link></li>
            <li><Link href="/volunteer" className="hover:text-teal-200 transition-colors">Volunteer</Link></li>
            <li><Link href="/stories" className="hover:text-teal-200 transition-colors">Impact Stories</Link></li>
            <li><Link href="/adopt" className="hover:text-teal-200 transition-colors">Adopt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}