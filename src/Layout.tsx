import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BakingAssistant } from './components/BakingAssistant';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <BakingAssistant />
    </div>
  );
}
