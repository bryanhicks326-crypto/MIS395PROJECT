/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
1  import React from 'react';
2  
3  function App() {
4    return (
5      <div>
6        <h1>Maddow Modular</h1>
7        <p>Welcome to the MIS395 Project!</p>
8      </div>
9    );
10 }
11 
12 export default App;

import Locations from './components/Locations';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
