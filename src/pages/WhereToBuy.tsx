import { MapPin, Search } from 'lucide-react';

export function WhereToBuy() {
  const stores = [
    { name: 'კარფური (Carrefour)', locations: 'ყველა ფილიალი', type: 'ჰიპერმარკეტი' },
    { name: 'აგროჰაბი (Agrohub)', locations: 'ყველა ფილიალი', type: 'სუპერმარკეტი' },
    { name: 'გუდვილი (Goodwill)', locations: 'დიდი დიღომი, ქავთარაძე', type: 'ჰიპერმარკეტი' },
    { name: 'ევროპროდუქტი', locations: 'ყველა ფილიალი', type: 'სუპერმარკეტი' },
    { name: 'სპარი (Spar)', locations: 'შერჩეული ფილიალები', type: 'უბნის მაღაზია' },
    { name: 'ნიკორა სუპერმარკეტი', locations: 'შერჩეული ფილიალები', type: 'სუპერმარკეტი' }
  ];

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-georgian text-4xl md:text-5xl font-bold text-forest mb-6">სად ვიყიდოთ</h1>
          <p className="font-georgian text-lg text-warmgray max-w-2xl mx-auto">
            მოძებნეთ Nordeko Dobele-ს პროდუქცია თქვენს უახლოეს სუპერმარკეტში.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Store List */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-8 shadow-sm border border-warmgray/10 h-[600px] flex flex-col">
            <div className="relative mb-6">
              <input 
                type="text" 
                placeholder="მოძებნეთ მაღაზია ან უბანი..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-warmgray/30 focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest font-georgian transition-colors"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-warmgray" />
            </div>
            
            <div className="overflow-y-auto flex-grow pr-2 space-y-4">
              {stores.map((store, i) => (
                <div key={i} className="p-4 rounded-2xl border border-warmgray/10 hover:border-forest/30 hover:bg-forest/5 transition-colors cursor-pointer">
                  <h3 className="font-georgian font-bold text-lg text-charcoal mb-1">{store.name}</h3>
                  <div className="flex items-center gap-2 text-warmgray text-sm font-georgian mb-2">
                    <MapPin className="w-4 h-4 text-wheat-dark" />
                    {store.locations}
                  </div>
                  <span className="inline-block bg-cream text-forest-dark text-xs font-bold px-2 py-1 rounded font-georgian">
                    {store.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-warmgray/10 h-[600px] relative">
            <div className="absolute inset-0 bg-warmgray/10 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-16 h-16 text-forest/40 mb-4" />
              <h3 className="font-georgian font-bold text-2xl text-charcoal mb-2">ინტერაქტიული რუკა</h3>
              <p className="font-georgian text-warmgray max-w-md">
                აქ განთავსდება Google Maps-ის ინტეგრაცია პარტნიორი მაღაზიების ზუსტი ლოკაციებით.
              </p>
            </div>
          </div>
        </div>

        {/* Wholesale CTA */}
        <div className="mt-16 bg-forest rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
              alt="Background pattern" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-georgian text-3xl font-bold text-cream mb-4">გაქვთ საცხობი ან რესტორანი?</h2>
            <p className="font-georgian text-cream/80 mb-8 text-lg">
              ჩვენ გთავაზობთ სპეციალურ პირობებს და საბითუმო ფასებს ბიზნეს მომხმარებლებისთვის.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-wheat text-forest-dark font-georgian font-bold rounded-full hover:bg-white transition-colors text-lg"
            >
              დაგვიკავშირდით საბითუმო შესყიდვისთვის
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
