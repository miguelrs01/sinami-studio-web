import React from 'react';
import { Instagram, Mail, Heart, AtSign } from 'lucide-react';
import { SAFE_ASSETS } from '../constants';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={SAFE_ASSETS.LOGO} 
                alt="Sinami Logo" 
                className="w-10 h-10 rounded-lg bg-white p-1"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = SAFE_ASSETS.FALLBACK_LOGO; }}
              />
              <span className="text-2xl font-bold tracking-tighter text-white">SINAMI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Juega. Organiza. Vive.<br/>
              Creando experiencias digitales inolvidables desde nuestro pequeño estudio.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-orange-400">Apps</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/apps" className="hover:text-white transition-colors">Yo Nunca</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-orange-400">Estudio</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-orange-400">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.threads.com/@sinamistudio" target="_blank" rel="noreferrer" aria-label="Threads" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                {/* Custom SVG for Threads icon */}
                <svg viewBox="0 0 192 192" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M141.537 123.072C151.011 114.771 157.043 103.046 157.043 89.9482C157.043 55.0862 129.563 26.8604 96.0049 26.8604C62.4468 26.8604 35.1528 55.2443 35.1528 89.9482C35.1528 123.456 61.642 153.256 96.0049 153.256C112.545 153.256 127.34 146.963 138.489 137.017L146.062 147.954C132.899 160.89 115.118 168.044 96.0049 168.044C52.7937 168.044 22 131.789 22 89.9482C22 47.0189 54.7645 14 96.0049 14C138.452 14 170 47.2882 170 89.9482C170 102.261 167.312 113.397 162.775 122.954C157.859 133.303 145.451 140.232 132.844 140.232C123.75 140.232 117.859 133.911 117.859 125.751V125.663C117.859 115.004 125.684 107.16 135.532 107.16C140.407 107.16 144.133 108.995 146.476 111.45" />
                  <path d="M129.563 89.9482C129.563 72.8488 114.636 58.4043 96.0049 58.4043C77.3735 58.4043 62.4468 72.8488 62.4468 89.9482C62.4468 107.048 77.3735 121.492 96.0049 121.492C105.77 121.492 114.394 117.701 120.59 111.956" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sinamistudio/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="mailto:sinami.studio22@gmail.com" aria-label="Email" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Sinami Studio. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Hecho con <Heart size={14} className="text-red-500 fill-current" /> por Miguel & Nadia.
          </p>
        </div>
      </div>
    </footer>
  );
};
