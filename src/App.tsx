/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200">
      <Navbar />
      <main>
        <Home />
        <About />
        <Pricing />
        <Testimonials />
        <Services />
        <Gallery />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
