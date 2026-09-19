import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-16 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-white" />
            <span className="text-xl font-bold tracking-widest text-white uppercase">Maddow</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-500">
            Precision modular construction for a rapidly changing world. Engineering scale, speed, and durability from our factories to your site.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
            <li><a href="#locations" className="hover:text-white transition-colors">Locations & Facilities</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>Phone: (316) 895-3463</li>
            <li><a href="mailto:behicks@shockerslwichita.edu" className="hover:text-white transition-colors">behicks@shockerslwichita.edu</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
        <div className="flex flex-col gap-2">
          <p>© {new Date().getFullYear()} Maddow Modular. All rights reserved.</p>
          <p className="text-xs text-slate-600">
            This is not a real commercial website but a part of MIS 395 class requirements at Wichita State University.
          </p>
          <p className="text-xs text-slate-600">
            Philadelphia photography:{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Philadelphia_skyline_panorama.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors underline underline-offset-2"
            >
              Pierre Blaché
            </a>
            {' '}(CC0) and{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Center_City_Philadelphia_2018_02.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors underline underline-offset-2"
            >
              Peetlesnumber1
            </a>
            {' '}(
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors underline underline-offset-2"
            >
              CC BY-SA 4.0
            </a>
            ), via Wikimedia Commons.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
