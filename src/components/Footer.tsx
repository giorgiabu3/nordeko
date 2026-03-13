import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest text-cream/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-georgian font-bold text-2xl text-cream tracking-tight">
                Nordeko <span className="text-wheat">Dobele</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-georgian">
              ევროპული ხარისხის ფქვილი, რომელსაც ენდობიან ქართველი მცხობელები. 1994 წლიდან.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/60 hover:text-wheat transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-wheat transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-cream font-georgian font-semibold mb-4">ნავიგაცია</h3>
            <ul className="space-y-3 text-sm font-georgian">
              <li><Link to="/products" className="hover:text-wheat transition-colors">პროდუქცია</Link></li>
              <li><Link to="/recipes" className="hover:text-wheat transition-colors">რეცეპტები</Link></li>
              <li><Link to="/about" className="hover:text-wheat transition-colors">ჩვენს შესახებ</Link></li>
              <li><Link to="/where-to-buy" className="hover:text-wheat transition-colors">სად ვიყიდოთ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-georgian font-semibold mb-4">კონტაქტი</h3>
            <ul className="space-y-3 text-sm font-georgian">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-wheat shrink-0" />
                <span>თბილისი, საქართველო</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-wheat shrink-0" />
                <span>+995 32 200 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-wheat shrink-0" />
                <span>info@nordekodobele.ge</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-georgian font-semibold mb-4">B2B / საბითუმო</h3>
            <p className="text-sm mb-4 font-georgian">
              გაქვთ საცხობი ან რესტორანი? დაგვიკავშირდით საბითუმო ფასებისთვის.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2 border border-wheat text-wheat hover:bg-wheat hover:text-forest transition-colors rounded-full text-sm font-medium font-georgian w-full"
            >
              მოითხოვეთ შეთავაზება
            </Link>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Nordeko Dobele Georgia. ყველა უფლება დაცულია.</p>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-wheat transition-colors">კონფიდენციალურობა</Link>
            <Link to="#" className="hover:text-wheat transition-colors">წესები და პირობები</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
