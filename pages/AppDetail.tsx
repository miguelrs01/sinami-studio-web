import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, Star } from 'lucide-react';
import { APPS, ASSETS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

export const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const app = APPS.find(g => g.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!app) {
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
      {/* Hero Header for App */}
      <div className="relative h-[40vh] md:h-[50vh] w-full bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
            <img src={app.heroUrl} alt={app.title} className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = ASSETS.FALLBACK_BANNER; }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
             <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2" /> Volver al estudio
             </Link>
             <h1 className="text-5xl md:text-7xl font-black text-white mb-4 shadow-sm">{app.title}</h1>
             <div className="flex items-center gap-4 text-white/90 font-medium">
                <span className="bg-orange-500 px-3 py-1 rounded-md">{app.platform}</span>
                <span>{app.status}</span>
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
          {app.longDescription}
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {/* Screenshots en formato móvil */}
          <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-md">
            <img src="https://play-lh.googleusercontent.com/9SNvkbT9RuCyEmKKgfv0873unHH8TdIWtQa4fJdRpmVan17IsjjX1Vi5RgUQf3Fj1tdhH8NiU0nHGkTapWcXEA=w1052-h592-rw" alt="Appplay 1" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-md">
            <img src="https://play-lh.googleusercontent.com/0w_dDHNLZ8t0EzJekQ4SvDWwQq2TaUnYJFSkx0ipXXD75iz89leo5VvAcGsxV_cuYZ0_k9PBbeS8twDhB3Y6=w1052-h592-rw" alt="Appplay 2" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-md">
            <img src="https://play-lh.googleusercontent.com/kisN7RMqEOb833h8lPrfjRg14WMt5DhIKnMnyhfe6r6pMhIJQuwaNygG7sOZ0i6iqAPfxiHAYrq2uzV7yh_SkA=w1052-h592-rw" alt="Appplay 3" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-md">
            <img src="https://play-lh.googleusercontent.com/losq93-h_gKudEY2o68L9zHtcJCz7X7zAybaAteTpPjgSN6S-zwbV5movUJ2DhKIQP3URDegj_vep0GeVOWCFg=w1052-h592-rw" alt="Appplay 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

          <div className="lg:col-span-1">
            <div className="bg-orange-50 rounded-2xl p-8 sticky top-24 shadow-sm border border-orange-100">
              {/* Logo centrado */}
              <div className="w-24 h-24 bg-white rounded-2xl shadow-md mb-8 overflow-hidden mx-auto flex items-center justify-center">
                <img
                  src={app.thumbnailUrl}
                  alt="Icon"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = ASSETS.PLACEHOLDER_APP; }}
                />
              </div>

              {!isPlayMode && (
                <div className="mb-6">
                  <a href={playBuildUrl} target="_blank" rel="noreferrer" className="block">
                    <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors shadow-lg cursor-pointer">
                      <ExternalLink size={18} />
                      Jugar en web
                    </button>
                  </a>
                </div>
              )}

              <div className="space-y-4">
                {/* Android / Google Play */}
                {app.appLink ? (
                  <a href={app.appLink} target="_blank" rel="noreferrer">
                    <button className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg cursor-pointer">
                      <FontAwesomeIcon icon={faGooglePlay} size="lg" color="#6dd099" />
                      Descargar Android
                    </button>
                  </a>
                ) : (
                  <button disabled className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed shadow-lg">
                    <FontAwesomeIcon icon={faGooglePlay} size="lg" color="#000000" />
                    Descargar Android (Próximamente)
                  </button>
                )}

                {/* Separación entre botones */}
                <div className="mt-4"></div>

                {/* iOS / App Store */}
                {app.appIosLink ? (
                  <a href={app.appIosLink} target="_blank" rel="noreferrer">
                    <button className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg cursor-pointer">
                      <FontAwesomeIcon icon={faAppStoreIos} size="lg" color="#ffffff" />
                      Descargar iOS
                    </button>
                  </a>
                ) : (
                  isPwaMode ? (
                    <a href={playBuildUrl} target="_blank" rel="noreferrer">
                      <button className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg cursor-pointer">
                        <FontAwesomeIcon icon={faAppStoreIos} size="lg" color="#ffffff" />
                        Descargar iOS (Próximamente)
                      </button>
                    </a>
                  ) : (
                    <button disabled className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed shadow-lg">
                      <FontAwesomeIcon icon={faAppStoreIos} size="lg" color="#000000" />
                      Descargar iOS (Próximamente)
                    </button>
                  )
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-orange-200">
                <h3 className="font-bold text-gray-900 mb-4">Características</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Star size={16} className="text-orange-500 mr-2" /> Multijugador offline
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star size={16} className="text-orange-500 mr-2" /> Modo normal y +18
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star size={16} className="text-orange-500 mr-2" /> +300 frases
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
