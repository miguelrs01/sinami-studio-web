import React, { useEffect } from 'react';
import { AppCard } from '../components/AppCard';
import { APPS } from '../constants';
import { Sparkles } from 'lucide-react';

export const AppsPage: React.FC = () => {
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
            Nuestras aplicaciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de experiencias diseñadas para divertirte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPS.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};