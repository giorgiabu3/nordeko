import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Products() {
  const products = [
    {
      id: 1,
      name: 'უმაღლესი ხარისხის ფქვილი (Extra)',
      description: 'იდეალურია ფუნთუშეულის, ტორტების და ნაზი საკონდიტრო ნაწარმისთვის. უზრუნველყოფს ცომის მაქსიმალურ მოცულობას და სითეთრეს.',
      badge: 'EXTRA',
      badgeColor: 'bg-forest text-cream',
      image: 'https://images.unsplash.com/photo-1627485937980-221c88ce04ea?q=80&w=1000&auto=format&fit=crop',
      weights: ['1 კგ', '2 კგ', '5 კგ', '25 კგ (საბითუმო)'],
      bestFor: ['ტორტი', 'კრუასანი', 'ფუნთუშა']
    },
    {
      id: 2,
      name: 'პრემიუმ ფქვილი (405)',
      description: 'უნივერსალური ფქვილი ყოველდღიური ცხობისთვის. საუკეთესო არჩევანი ტრადიციული ქართული ხაჭაპურისა და პურისთვის.',
      badge: 'PREMIUM',
      badgeColor: 'bg-wheat text-forest-dark',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1000&auto=format&fit=crop',
      weights: ['1 კგ', '2 კგ', '5 კგ', '10 კგ', '50 კგ (საბითუმო)'],
      bestFor: ['ხაჭაპური', 'პური', 'პიცა']
    },
    {
      id: 3,
      name: 'მთელმარცვლოვანი ფქვილი',
      description: 'ჯანსაღი არჩევანი, მდიდარია ბოჭკოთი და მინერალებით. იდეალურია დიეტური პურისთვის და ჯანსაღი კვების მოყვარულთათვის.',
      badge: 'WHOLE WHEAT',
      badgeColor: 'bg-warmgray text-cream',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
      weights: ['1 კგ', '2 კგ', '25 კგ (საბითუმო)'],
      bestFor: ['დიეტური პური', 'ჯანსაღი ნამცხვარი']
    },
    {
      id: 4,
      name: 'ჭვავის ფქვილი',
      description: 'ტრადიციული შავი პურის გამოსაცხობად. გამოირჩევა განსაკუთრებული არომატით და სასარგებლო თვისებებით.',
      badge: 'RYE',
      badgeColor: 'bg-charcoal text-cream',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
      weights: ['1 კგ', '25 კგ (საბითუმო)'],
      bestFor: ['შავი პური', 'ბოროდინული']
    }
  ];

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-georgian text-4xl md:text-5xl font-bold text-forest mb-6">ჩვენი პროდუქცია</h1>
          <p className="font-georgian text-lg text-warmgray max-w-2xl mx-auto">
            Nordeko Dobele გთავაზობთ უმაღლესი ხარისხის ლატვიურ ფქვილს ნებისმიერი კულინარიული გამოწვევისთვის.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-warmgray/10 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto bg-[#F5F5F5] relative p-8 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover h-full w-full mix-blend-multiply rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full font-georgian ${product.badgeColor}`}>
                  {product.badge}
                </div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-georgian text-2xl font-bold text-charcoal mb-3">{product.name}</h3>
                  <p className="font-georgian text-warmgray mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-georgian text-sm font-bold text-forest mb-2 uppercase tracking-wider">იდეალურია:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.bestFor.map((item, i) => (
                        <span key={i} className="bg-wheat/20 text-forest-dark text-xs font-bold px-3 py-1.5 rounded-full font-georgian">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-georgian text-sm font-bold text-forest mb-2 uppercase tracking-wider">შეფუთვა:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.weights.map((weight, i) => (
                        <span key={i} className="border border-warmgray/20 text-charcoal text-xs font-medium px-3 py-1.5 rounded-md font-georgian">
                          {weight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-warmgray/10 flex justify-between items-center">
                  <Link to="/where-to-buy" className="text-forest font-georgian font-bold hover:text-forest-dark transition-colors flex items-center">
                    სად ვიყიდოთ <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
