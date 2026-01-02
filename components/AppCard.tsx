import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Monitor, Globe, Star, Gamepad2, Hourglass } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { App, Platform } from '../types';
import { ASSETS } from '../constants';

interface AppCardProps {
  app: App;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case 'Android': return <FontAwesomeIcon icon={faAndroid} />;
      case 'iOS': return <FontAwesomeIcon icon={faApple} />;
      case 'PC': return <Monitor size={16} />;
      case 'Web': return <Globe size={16} />;
      default: return <Gamepad2 size={16} />;
    }
  };

  const platformDisplay = (
    <div className="flex items-center gap-2 flex-wrap">
      {app.platform.map((p) => (
        <span key={p} title={p} className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500">
          {getPlatformIcon(p)}
        </span>
      ))}
    </div>
  );

  if (app.comingSoon) {
    return (
      <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm transition-all filter grayscale opacity-60">
        <div className="p-4 flex gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200 flex items-center justify-center">
            <img
              src={app.thumbnailUrl || ASSETS.PLACEHOLDER_APP}
              alt={app.title}
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = ASSETS.PLACEHOLDER_APP; }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-gray-900 truncate pr-2">{app.title}</h3>
              {platformDisplay}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <Hourglass size={16} className="text-gray-500" />
              <span>Próximamente</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              {app.description}
            </p>
            <div className="mt-4">
              <button
                disabled
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-300 text-gray-500 text-sm font-bold cursor-not-allowed"
              >
                Próximamente
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/apps/${app.id}`} className="group block bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
      <div className="p-4 flex gap-4">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-orange-50 flex-shrink-0 border border-orange-100">
          <img
            src={app.thumbnailUrl || ASSETS.PLACEHOLDER_APP}
            alt={app.title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = ASSETS.PLACEHOLDER_APP; }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-bold text-gray-900 truncate pr-2">{app.title}</h3>
            {platformDisplay}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
            <Star size={16} className="text-orange-500" />
            <span>5.0</span>
            <span>•</span>
            <span>Gratis</span>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            {app.description}
          </p>
          <div className="mt-4">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold group-hover:bg-orange-600 transition-colors"
            >
              Ver detalles
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
