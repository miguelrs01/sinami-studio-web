import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SAFE_ASSETS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-orange-50 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        
         {/* Banner Image Container */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-10 transform transition-transform hover:scale-[1.01] duration-500">
           <img 
            src={SAFE_ASSETS.BANNER} 
            alt="Sinami Studio Banner - Juega, Organiza, Vive" 
            className="w-full h-auto object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = SAFE_ASSETS.FALLBACK_BANNER; }}
           />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Creamos mundos donde <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              la diversión cobra vida
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium">
            Juega. Organiza. Vive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#games" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30">
              Ver Nuestros Juegos
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-orange-600 bg-white border-2 border-orange-100 hover:border-orange-200 hover:bg-orange-50 transition-all shadow-md">
              Conoce al Equipo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
