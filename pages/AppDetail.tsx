import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, Star } from 'lucide-react';
import { APPS, ASSETS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

export const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const app = APPS.find(g => g.id === id);

  const isPlayMode = app?.platform.includes('Web');
  const playBuildUrl = app?.appWebLink;
  const isPwaMode = false;

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
        
        {app.screenshots && app.screenshots.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {/* Screenshots renderizados a partir de constants.ts */}
            {app.screenshots.map((src, index) => (
              <div
                key={index}
                className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt={`${app.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = ASSETS.PLACEHOLDER_APP;
                  }}
                />
              </div>
            ))}
          </div>
        )}

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

              {app.appWebLink && (
                <div className="mb-6">
                  {app.appWebLink === "proximamente" ? (
                    <button disabled className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed shadow-lg">
                      <ExternalLink size={18} />
                      Jugar en web (Próximamente)
                    </button>
                  ) : (
                    <a href={app.appWebLink} target="_blank" rel="noreferrer" className="block">
                      <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors shadow-lg cursor-pointer">
                        <ExternalLink size={18} />
                        Jugar en web
                      </button>
                    </a>
                  )}
                </div>
              )}

              <div className="space-y-4">
                {/* Android / Google Play */}
                {app.appLink && (
                  app.appLink === "proximamente" ? (
                    <button disabled className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed shadow-lg">
                      <FontAwesomeIcon icon={faGooglePlay} size="lg" color="#000000" />
                      Descargar Android (Próximamente)
                    </button>
                  ) : (
                    <a href={app.appLink} target="_blank" rel="noreferrer">
                      <button className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg cursor-pointer">
                        <FontAwesomeIcon icon={faGooglePlay} size="lg" color="#6dd099" />
                        Descargar Android
                      </button>
                    </a>
                  )
                )}

                {/* Separación entre botones */}
                <div className="mt-4"></div>

                {/* iOS / App Store */}
                {app.appIosLink && (
                  app.appIosLink === "proximamente" ? (
                    <button disabled className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed shadow-lg">
                      <FontAwesomeIcon icon={faAppStoreIos} size="lg" color="#000000" />
                      Descargar iOS (Próximamente)
                    </button>
                  ) : (
                    <a href={app.appIosLink} target="_blank" rel="noreferrer">
                      <button className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg cursor-pointer">
                        <FontAwesomeIcon icon={faAppStoreIos} size="lg" color="#ffffff" />
                        Descargar iOS
                      </button>
                    </a>
                  )
                )}
              </div>

              {app.features && app.features.length > 0 && (
                <div className="mt-8 pt-8 border-t border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-4">Características</h3>
                  <ul className="space-y-3">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <Star size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
