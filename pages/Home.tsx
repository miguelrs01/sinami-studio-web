import React from 'react';
import { Hero } from '../components/Hero';
import { GameCard } from '../components/GameCard';
import { About } from '../components/About';
import { GAMES } from '../constants';
import { Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Games Grid Section */}
      <section id="games" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-sm uppercase tracking-wide mb-4">
            <Sparkles size={16} />
            Nuestros Proyectos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Biblioteca de juegos
          </h2>
        </div>
        
        {/* Centered grid for single game */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Using empty divs to center the single card if needed, or just flex-center via CSS class */}
          {GAMES.map((game) => (
             <div key={game.id} className="md:col-start-1 lg:col-start-2"> 
                <GameCard game={game} />
             </div>
          ))}
        </div>
      </section>

      <About />
      
      {/* CTA Section */}
      <section className="py-20 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            ¿Tienes una idea genial?
          </h2>
          <p className="text-orange-100 text-xl mb-8 font-medium">
            Siempre estamos abiertos a colaboraciones y nuevos retos. ¡Escríbenos y creemos algo increíble juntos!
          </p>
          <a 
            href="mailto:sinami.studio22@gmail.com"
            className="inline-block bg-white text-orange-600 text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
};