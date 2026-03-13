import { MapPin, Phone, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-georgian text-4xl md:text-5xl font-bold text-forest mb-6">კონტაქტი</h1>
          <p className="font-georgian text-lg text-warmgray max-w-2xl mx-auto">
            გაქვთ კითხვები ან გსურთ საბითუმო შეკვეთა? დაგვიკავშირდით.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-warmgray/10">
            <h2 className="font-georgian text-3xl font-bold text-forest mb-8">საკონტაქტო ინფორმაცია</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center text-wheat-dark">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-georgian font-bold text-xl text-charcoal mb-2">მისამართი</h4>
                  <p className="font-georgian text-warmgray">თბილისი, საქართველო<br/>წერეთლის გამზირი 118</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center text-wheat-dark">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-georgian font-bold text-xl text-charcoal mb-2">ტელეფონი</h4>
                  <p className="font-georgian text-warmgray">+995 32 200 00 00<br/>+995 599 00 00 00 (საბითუმო)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center text-wheat-dark">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-georgian font-bold text-xl text-charcoal mb-2">ელ. ფოსტა</h4>
                  <p className="font-georgian text-warmgray">info@nordekodobele.ge<br/>sales@nordekodobele.ge</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-warmgray/10">
              <h4 className="font-georgian font-bold text-lg text-charcoal mb-4">სამუშაო საათები</h4>
              <p className="font-georgian text-warmgray">ორშაბათი - პარასკევი: 09:00 - 18:00<br/>შაბათი: 10:00 - 15:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-warmgray/10">
            <h2 className="font-georgian text-3xl font-bold text-forest mb-8">მოგვწერეთ</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-georgian text-sm font-bold text-charcoal mb-2">სახელი</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-warmgray/30 focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest font-georgian transition-colors"
                    placeholder="თქვენი სახელი"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-georgian text-sm font-bold text-charcoal mb-2">ტელეფონი</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-warmgray/30 focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest font-georgian transition-colors"
                    placeholder="თქვენი ნომერი"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block font-georgian text-sm font-bold text-charcoal mb-2">ელ. ფოსტა</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-warmgray/30 focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest font-georgian transition-colors"
                  placeholder="თქვენი ელ. ფოსტა"
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block font-georgian text-sm font-bold text-charcoal mb-2">შეკითხვის ტიპი</label>
                <select 
                  id="type" 
                  className="w-full px-4 py-3 rounded-xl border border-warmgray/30 focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest font-georgian transition-colors bg-white"
                >
                  <option>ზოგადი კითხვა</option>
                  <option>საბითუმო შეკვეთა</option>
                  <option>პარტნიორობა</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-georgian text-sm font-bold text-charcoal mb-2">შეტყობინება</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-warmgray/30 focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest font-georgian transition-colors resize-none"
                  placeholder="თქვენი შეტყობინება..."
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-forest text-cream font-georgian font-bold rounded-xl hover:bg-forest-dark transition-colors text-lg"
              >
                გაგზავნა <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
