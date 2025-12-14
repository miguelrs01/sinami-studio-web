import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, Star } from 'lucide-react';
import { GAMES } from '../constants';

export const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = GAMES.find(g => g.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Juego no encontrado</p>
          <Link to="/" className="text-orange-600 font-bold hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header for Game */}
      <div className="relative h-[60vh] w-full bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
            <img src={game.heroUrl} alt={game.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
             <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2" /> Volver al estudio
             </Link>
             <h1 className="text-5xl md:text-7xl font-black text-white mb-4 shadow-sm">{game.title}</h1>
             <div className="flex items-center gap-4 text-white/90 font-medium">
                <span className="bg-orange-500 px-3 py-1 rounded-md">{game.platform}</span>
                <span>{game.status}</span>
             </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre el juego</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {game.longDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
               {/* Placeholders for screenshots */}
               <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                 <img src={`https://picsum.photos/seed/${game.id}1/600/400`} alt="Gameplay 1" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                 <img src={`https://picsum.photos/seed/${game.id}2/600/400`} alt="Gameplay 2" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-orange-50 rounded-2xl p-8 sticky top-24 shadow-sm border border-orange-100">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
                <img src={game.thumbnailUrl} alt="Icon" className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-4">
                 <button className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg">
                    <Download size={20} />
                    Descargar Ahora
                 </button>
                 
                 {game.appLink && (
                   <a 
                     href={game.appLink} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="w-full bg-white text-orange-600 border-2 border-orange-100 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors"
                   >
                      <ExternalLink size={20} />
                      Visitar Web Oficial
                   </a>
                 )}
              </div>

              <div className="mt-8 pt-8 border-t border-orange-200">
                 <h3 className="font-bold text-gray-900 mb-4">Características</h3>
                 <ul className="space-y-3">
                   <li className="flex items-center text-gray-600">
                     <Star size={16} className="text-orange-500 mr-2" /> Single Player
                   </li>
                   <li className="flex items-center text-gray-600">
                     <Star size={16} className="text-orange-500 mr-2" /> Offline Mode
                   </li>
                   <li className="flex items-center text-gray-600">
                     <Star size={16} className="text-orange-500 mr-2" /> Family Friendly
                   </li>
                 </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};