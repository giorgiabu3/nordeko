import { Link } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';

export function Recipes() {
  const recipes = [
    {
      id: 1,
      title: 'ნამდვილი იმერული ხაჭაპური',
      category: 'ტრადიციული',
      time: '45 წთ',
      difficulty: 'საშუალო',
      image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1000&auto=format&fit=crop',
      flour: 'Premium 405'
    },
    {
      id: 2,
      title: 'კლასიკური ფრანგული ბაგეტი',
      category: 'პური',
      time: '3 სთ',
      difficulty: 'რთული',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
      flour: 'Premium 405'
    },
    {
      id: 3,
      title: 'კარაქიანი კრუასანი',
      category: 'დესერტი',
      time: '4 სთ',
      difficulty: 'რთული',
      image: 'https://images.unsplash.com/photo-1558961363-a0c65b891555?q=80&w=1000&auto=format&fit=crop',
      flour: 'Extra'
    },
    {
      id: 4,
      title: 'ჯანსაღი მთელმარცვლოვანი პური',
      category: 'პური',
      time: '2.5 სთ',
      difficulty: 'მარტივი',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
      flour: 'Whole Wheat'
    },
    {
      id: 5,
      title: 'ფუმფულა ბლინები',
      category: 'საუზმე',
      time: '20 წთ',
      difficulty: 'მარტივი',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000&auto=format&fit=crop',
      flour: 'Extra'
    },
    {
      id: 6,
      title: 'იტალიური პიცა მარგარიტა',
      category: 'საერთაშორისო',
      time: '1.5 სთ',
      difficulty: 'საშუალო',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop',
      flour: 'Premium 405'
    }
  ];

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-georgian text-4xl md:text-5xl font-bold text-forest mb-6">რეცეპტები</h1>
          <p className="font-georgian text-lg text-warmgray max-w-2xl mx-auto">
            აღმოაჩინეთ საუკეთესო რეცეპტები Nordeko Dobele-ს ფქვილით. ტრადიციული ქართულიდან ევროპულ კლასიკამდე.
          </p>
        </div>

        {/* Filters - Placeholder for UI */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['ყველა', 'ტრადიციული', 'პური', 'დესერტი', 'საუზმე'].map((filter, i) => (
            <button 
              key={i}
              className={`px-6 py-2 rounded-full font-georgian text-sm font-bold transition-colors ${
                i === 0 ? 'bg-forest text-cream' : 'bg-white text-charcoal border border-warmgray/20 hover:border-forest'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to="#" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warmgray/10 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-forest-dark text-xs font-bold px-3 py-1.5 rounded-full font-georgian shadow-sm">
                  {recipe.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-georgian text-xl font-bold text-charcoal mb-4 group-hover:text-forest transition-colors line-clamp-2">
                  {recipe.title}
                </h3>
                
                <div className="mt-auto flex items-center justify-between text-warmgray text-sm font-georgian">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-wheat-dark" />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ChefHat className="w-4 h-4 text-wheat-dark" />
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-warmgray/10">
                  <span className="text-xs font-georgian text-warmgray">რეკომენდებული ფქვილი: </span>
                  <span className="text-xs font-georgian font-bold text-forest">{recipe.flour}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
