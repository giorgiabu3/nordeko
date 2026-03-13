import { Award, ShieldCheck, Leaf, Star } from 'lucide-react';

export function About() {
  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-georgian text-4xl md:text-5xl font-bold text-forest mb-6">ჩვენს შესახებ</h1>
          <p className="font-georgian text-lg text-warmgray max-w-2xl mx-auto">
            Nordeko Dobele - ლატვიური ტრადიცია, ევროპული ხარისხი და ქართული გემო.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="font-georgian text-3xl font-bold text-forest mb-6">ისტორია, რომელიც 1994 წლიდან იწყება</h2>
            <p className="font-georgian text-warmgray mb-6 leading-relaxed text-lg">
              Dobeles Dzirnavnieks არის ერთ-ერთი უდიდესი და უძველესი მარცვლეულის გადამამუშავებელი საწარმო ბალტიისპირეთში. დაარსებიდან დღემდე, კომპანია მუდმივად ნერგავს ინოვაციებს და იცავს უმაღლეს ევროპულ სტანდარტებს.
            </p>
            <p className="font-georgian text-warmgray mb-8 leading-relaxed text-lg">
              საქართველოში Nordeko Dobele-ს ბრენდით შემოსვლის მთავარი მიზანი იყო ქართველი მომხმარებლისთვის შეგვეთავაზებინა პრემიუმ კლასის ფქვილი, რომელიც იდეალურად მოერგებოდა როგორც ტრადიციულ ქართულ სამზარეულოს (ხაჭაპური, პური), ასევე ევროპულ საკონდიტრო ნაწარმს.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-warmgray/10 text-center">
                <span className="block font-georgian text-4xl font-bold text-wheat mb-2">30+</span>
                <span className="font-georgian text-sm text-charcoal font-bold">წლიანი გამოცდილება</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-warmgray/10 text-center">
                <span className="block font-georgian text-4xl font-bold text-wheat mb-2">100%</span>
                <span className="font-georgian text-sm text-charcoal font-bold">ნატურალური პროდუქტი</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
                alt="Wheat fields" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-forest p-8 rounded-2xl text-cream max-w-xs hidden md:block shadow-lg">
              <p className="font-georgian font-bold text-xl mb-2">"ხარისხი, რომელსაც შეგიძლიათ ენდოთ ყოველდღე."</p>
            </div>
          </div>
        </div>

        {/* Quality Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-warmgray/10 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-georgian text-3xl font-bold text-forest mb-4">რატომ Nordeko Dobele?</h2>
            <p className="font-georgian text-warmgray max-w-2xl mx-auto">ჩვენი წარმოების პროცესი მკაცრად კონტროლდება ყოველ ეტაპზე.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-wheat/20 rounded-full flex items-center justify-center text-wheat-dark mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-georgian font-bold text-xl text-charcoal mb-3">ევროპული სტანდარტი</h3>
              <p className="font-georgian text-warmgray text-sm">წარმოება სრულად შეესაბამება ევროკავშირის უსაფრთხოებისა და ხარისხის ნორმებს.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-wheat/20 rounded-full flex items-center justify-center text-wheat-dark mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-georgian font-bold text-xl text-charcoal mb-3">ეკოლოგიურად სუფთა</h3>
              <p className="font-georgian text-warmgray text-sm">ვიყენებთ მხოლოდ საუკეთესო ხარისხის, გენეტიკურად მოდიფიცირებული ორგანიზმებისგან თავისუფალ ხორბალს.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-wheat/20 rounded-full flex items-center justify-center text-wheat-dark mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-georgian font-bold text-xl text-charcoal mb-3">თანამედროვე ტექნოლოგიები</h3>
              <p className="font-georgian text-warmgray text-sm">უახლესი დანადგარები უზრუნველყოფს ფქვილის იდეალურ სტრუქტურასა და სისუფთავეს.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-wheat/20 rounded-full flex items-center justify-center text-wheat-dark mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-georgian font-bold text-xl text-charcoal mb-3">პროფესიონალთა არჩევანი</h3>
              <p className="font-georgian text-warmgray text-sm">ჩვენს ფქვილს იყენებენ წამყვანი საცხობები და რესტორნები მთელი საქართველოს მასშტაბით.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
