import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, ShieldCheck, Award, Leaf, Star, ChevronRight } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Freshly baked bread"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-cream"
          >
            <h1 className="font-georgian text-5xl md:text-7xl font-bold leading-tight mb-6">
              ევროპული ხარისხი <br/>
              <span className="text-wheat">ქართული საცხობისთვის</span>
            </h1>
            <p className="font-georgian text-lg md:text-xl mb-10 text-cream/90 leading-relaxed max-w-xl">
              Nordeko Dobele - პრემიუმ კლასის ლატვიური ფქვილი, რომელსაც ენდობიან პროფესიონალი და მოყვარული მცხობელები საქართველოში.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/where-to-buy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-wheat text-forest-dark font-georgian font-bold rounded-full hover:bg-white transition-colors text-lg"
              >
                <MapPin className="w-5 h-5" />
                სად ვიყიდოთ
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-cream text-cream font-georgian font-bold rounded-full hover:bg-cream/10 transition-colors text-lg"
              >
                ჩვენი პროდუქცია
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-forest text-cream py-12 border-b-4 border-wheat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-wheat mb-3" />
              <h3 className="font-georgian font-bold text-lg mb-1">ლატვიური ხარისხი</h3>
              <p className="text-sm text-cream/70 font-georgian">ევროპული სტანდარტები</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-wheat mb-3" />
              <h3 className="font-georgian font-bold text-lg mb-1">1994 წლიდან</h3>
              <p className="text-sm text-cream/70 font-georgian">მრავალწლიანი გამოცდილება</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-10 h-10 text-wheat mb-3" />
              <h3 className="font-georgian font-bold text-lg mb-1">100% ნატურალური</h3>
              <p className="text-sm text-cream/70 font-georgian">დანამატების გარეშე</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-wheat mb-3" />
              <h3 className="font-georgian font-bold text-lg mb-1">რჩეული არჩევანი</h3>
              <p className="text-sm text-cream/70 font-georgian">პროფესიონალებისგან</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-georgian text-4xl font-bold text-forest mb-4">ჩვენი პროდუქცია</h2>
            <p className="font-georgian text-warmgray max-w-2xl mx-auto">
              იდეალური ფქვილი ნებისმიერი რეცეპტისთვის - ტრადიციული ხაჭაპურიდან დაწყებული, ფრანგული კრუასანებით დამთავრებული.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Link to="/products" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warmgray/10">
              <div className="aspect-[4/5] bg-[#F5F5F5] relative p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1627485937980-221c88ce04ea?q=80&w=1000&auto=format&fit=crop" 
                  alt="Extra Premium Flour" 
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-forest text-cream text-xs font-bold px-3 py-1 rounded-full font-georgian">
                  EXTRA
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-georgian text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">უმაღლესი ხარისხის ფქვილი (Extra)</h3>
                <p className="font-georgian text-sm text-warmgray mb-4 line-clamp-2">
                  იდეალურია ფუნთუშეულის, ტორტების და ნაზი საკონდიტრო ნაწარმისთვის.
                </p>
                <div className="flex items-center text-forest font-georgian font-bold text-sm">
                  მეტის ნახვა <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link to="/products" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warmgray/10">
              <div className="aspect-[4/5] bg-[#F5F5F5] relative p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1000&auto=format&fit=crop" 
                  alt="Premium Flour" 
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-wheat text-forest-dark text-xs font-bold px-3 py-1 rounded-full font-georgian">
                  PREMIUM
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-georgian text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">პრემიუმ ფქვილი (405)</h3>
                <p className="font-georgian text-sm text-warmgray mb-4 line-clamp-2">
                  უნივერსალური ფქვილი ყოველდღიური ცხობისთვის, პურისა და ხაჭაპურისთვის.
                </p>
                <div className="flex items-center text-forest font-georgian font-bold text-sm">
                  მეტის ნახვა <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link to="/products" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warmgray/10">
              <div className="aspect-[4/5] bg-[#F5F5F5] relative p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop" 
                  alt="Whole Wheat Flour" 
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-warmgray text-cream text-xs font-bold px-3 py-1 rounded-full font-georgian">
                  WHOLE WHEAT
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-georgian text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">მთელმარცვლოვანი ფქვილი</h3>
                <p className="font-georgian text-sm text-warmgray mb-4 line-clamp-2">
                  ჯანსაღი არჩევანი, მდიდარია ბოჭკოთი და მინერალებით. იდეალურია დიეტური პურისთვის.
                </p>
                <div className="flex items-center text-forest font-georgian font-bold text-sm">
                  მეტის ნახვა <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-forest text-cream font-georgian font-bold rounded-full hover:bg-forest-dark transition-colors">
              სრული კატალოგი
            </Link>
          </div>
        </div>
      </section>

      {/* Why Nordeko */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-georgian text-4xl font-bold text-forest mb-6">რატომ ირჩევენ Nordeko Dobele-ს?</h2>
              <p className="font-georgian text-warmgray mb-8 text-lg leading-relaxed">
                ჩვენი ფქვილი იწარმოება ლატვიაში, უახლესი ტექნოლოგიებით და მკაცრი ევროპული სტანდარტების დაცვით. ეს უზრუნველყოფს უცვლელ ხარისხს ყოველ შეფუთვაში.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center text-wheat-dark">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-georgian font-bold text-xl text-charcoal mb-2">უმაღლესი სისუფთავე</h4>
                    <p className="font-georgian text-warmgray text-sm">მარცვლეული გადის მრავალსაფეხურიან წმენდას, რაც გამორიცხავს მინარევებს.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center text-wheat-dark">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-georgian font-bold text-xl text-charcoal mb-2">იდეალური ცხობის შედეგი</h4>
                    <p className="font-georgian text-warmgray text-sm">ცილის მაღალი შემცველობა უზრუნველყოფს ცომის კარგ ელასტიურობას და ფუმფულა სტრუქტურას.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center text-wheat-dark">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-georgian font-bold text-xl text-charcoal mb-2">სტაბილური ხარისხი</h4>
                    <p className="font-georgian text-warmgray text-sm">თქვენი საყვარელი რეცეპტი ყოველთვის ერთნაირად გემრიელი გამოვა.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Baking with flour" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-forest p-8 rounded-2xl text-cream max-w-xs hidden md:block">
                <p className="font-georgian font-bold text-xl mb-2">"საუკეთესო არჩევანი ხაჭაპურისთვის"</p>
                <p className="font-georgian text-sm text-wheat">- გიორგი, შეფ-მცხობელი</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Teaser */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-georgian text-4xl font-bold text-forest mb-4">შთაგონება სამზარეულოში</h2>
              <p className="font-georgian text-warmgray max-w-2xl">
                აღმოაჩინეთ ახალი გემოები ჩვენი რეცეპტებით.
              </p>
            </div>
            <Link to="/recipes" className="hidden md:flex items-center text-forest font-georgian font-bold hover:text-forest-dark transition-colors">
              ყველა რეცეპტი <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Recipe 1 */}
            <Link to="/recipes" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Imeretian Khachapuri" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-wheat/20 text-wheat-dark text-xs font-bold px-2 py-1 rounded font-georgian">ტრადიციული</span>
                  <span className="bg-warmgray/10 text-warmgray text-xs font-bold px-2 py-1 rounded font-georgian">45 წთ</span>
                </div>
                <h3 className="font-georgian text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">ნამდვილი იმერული ხაჭაპური</h3>
                <p className="font-georgian text-sm text-warmgray">საიდუმლო ფუმფულა ცომშია, რომლისთვისაც Nordeko Dobele-ს პრემიუმ ფქვილი იდეალურია.</p>
              </div>
            </Link>

            {/* Recipe 2 */}
            <Link to="/recipes" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop" 
                  alt="Artisan Bread" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-wheat/20 text-wheat-dark text-xs font-bold px-2 py-1 rounded font-georgian">პური</span>
                  <span className="bg-warmgray/10 text-warmgray text-xs font-bold px-2 py-1 rounded font-georgian">3 სთ</span>
                </div>
                <h3 className="font-georgian text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">კლასიკური ფრანგული ბაგეტი</h3>
                <p className="font-georgian text-sm text-warmgray">ხრაშუნა ქერქი და ჰაეროვანი გული - მიაღწიეთ პროფესიონალურ შედეგს სახლში.</p>
              </div>
            </Link>

            {/* Recipe 3 */}
            <Link to="/recipes" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558961363-a0c65b891555?q=80&w=1000&auto=format&fit=crop" 
                  alt="Croissant" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-wheat/20 text-wheat-dark text-xs font-bold px-2 py-1 rounded font-georgian">დესერტი</span>
                  <span className="bg-warmgray/10 text-warmgray text-xs font-bold px-2 py-1 rounded font-georgian">4 სთ</span>
                </div>
                <h3 className="font-georgian text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">კარაქიანი კრუასანი</h3>
                <p className="font-georgian text-sm text-warmgray">Extra ფქვილით მომზადებული ფენოვანი ცომი, რომელიც პირში დნება.</p>
              </div>
            </Link>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/recipes" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-forest text-cream font-georgian font-bold rounded-full hover:bg-forest-dark transition-colors">
              ყველა რეცეპტი
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-georgian text-4xl md:text-5xl font-bold text-cream mb-6">
            მზად ხართ საუკეთესო ცხობისთვის?
          </h2>
          <p className="font-georgian text-xl text-cream/80 mb-10">
            მოძებნეთ Nordeko Dobele-ს პროდუქცია თქვენს უახლოეს სუპერმარკეტში ან დაგვიკავშირდით საბითუმო შესყიდვისთვის.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/where-to-buy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-wheat text-forest-dark font-georgian font-bold rounded-full hover:bg-white transition-colors text-lg"
            >
              <MapPin className="w-5 h-5" />
              სად ვიყიდოთ
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-cream text-cream font-georgian font-bold rounded-full hover:bg-cream/10 transition-colors text-lg"
            >
              საბითუმო შეკვეთა
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
