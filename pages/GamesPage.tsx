import React, { useEffect } from 'react';
import { GameCard } from '../components/GameCard';
import { GAMES } from '../constants';
import { Sparkles } from 'lucide-react';

export const GamesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-sm uppercase tracking-wide mb-4">
            <Sparkles size={16} />
            Catálogo
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Nuestros Juegos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de experiencias diseñadas para divertirte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {GAMES.map((game) => (
             <div key={game.id} className="md:col-start-1 lg:col-start-2"> 
                <GameCard game={game} />
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};