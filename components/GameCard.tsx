import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Smartphone, Monitor, Globe } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Mobile': return <Smartphone size={16} />;
      case 'PC': return <Monitor size={16} />;
      case 'Web': return <Globe size={16} />;
      default: return <Gamepad2 size={16} />;
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-50 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img 
          src={game.thumbnailUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm uppercase tracking-wider">
          {game.status}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm font-semibold">
           {getPlatformIcon(game.platform)}
           <span>{game.platform}</span>
        </div>
        
        <h3 className="text-2xl font-black text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {game.title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {game.description}
        </p>
        
        <Link 
          to={`/games/${game.id}`}
          className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-orange-50 text-orange-700 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
        >
          Ver Detalles
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

import { Gamepad2 } from 'lucide-react';
