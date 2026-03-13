import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'მთავარი', path: '/' },
    { name: 'პროდუქცია', path: '/products' },
    { name: 'რეცეპტები', path: '/recipes' },
    { name: 'ჩვენს შესახებ', path: '/about' },
    { name: 'კონტაქტი', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-georgian font-bold text-2xl text-forest tracking-tight">
                Nordeko <span className="text-wheat">Dobele</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-georgian text-sm font-medium transition-colors hover:text-forest",
                  location.pathname === link.path ? "text-forest" : "text-charcoal/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/where-to-buy"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-cream bg-forest hover:bg-forest-dark transition-colors shadow-sm font-georgian"
            >
              <MapPin className="w-4 h-4" />
              სად ვიყიდოთ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-forest hover:bg-forest/5 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-forest/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md font-georgian text-base font-medium",
                  location.pathname === link.path
                    ? "text-forest bg-forest/5"
                    : "text-charcoal hover:text-forest hover:bg-forest/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/where-to-buy"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-3 border border-transparent text-base font-medium rounded-full text-cream bg-forest hover:bg-forest-dark transition-colors font-georgian"
            >
              <MapPin className="w-5 h-5" />
              სად ვიყიდოთ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
