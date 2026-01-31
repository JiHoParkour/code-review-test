'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: '홈', href: '/' },
    { name: '멤버', href: '/members' },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg animate-slide-down">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white hover:scale-110 transition-transform duration-300 inline-block">
            NewJeans
          </Link>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-gray-200 transition-all duration-300 px-3 py-2 rounded-md hover:scale-110 hover:bg-white/30 ${
                  pathname === item.href ? 'bg-white/20' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
