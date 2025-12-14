import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Smartphone, Monitor, Globe, Star, Gamepad2 } from 'lucide-react';
import { Game } from '../types';
import { ASSETS } from '../constants';

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
    <div className="group bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
      <div className="p-4 flex gap-4">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-orange-50 flex-shrink-0 border border-orange-100">
          <img
            src={game.thumbnailUrl}
            alt={game.title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = ASSETS.PLACEHOLDER_APP; }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900 truncate">{game.title}</h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500">
              {getPlatformIcon(game.platform)}
              {game.platform}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
            <Star size={16} className="text-orange-500" />
            <span>5.0</span>
            <span>•</span>
            <span>Gratis</span>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            {game.description}
          </p>
          <div className="mt-4">
            <Link
              to={`/games/${game.id}`}
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
            >
              Ver detalles
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
