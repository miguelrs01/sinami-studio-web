import React from 'react';
import { Heart, Code, Palette } from 'lucide-react';
import { TEAM, ASSETS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500 mb-4">
            <Heart size={24} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            La Historia de Sinami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más que un estudio, somos una pareja con un sueño compartido: crear experiencias que unan a las personas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TEAM.map((member, index) => (
              <div key={index} className="bg-orange-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 mx-auto bg-white rounded-full p-2 shadow-inner mb-4">
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover" 
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = ASSETS.PLACEHOLDER_AVATAR; }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-600 font-bold text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Code size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Desarrollo con Pasión</h3>
                <p className="text-gray-600">
                  Cada línea de código está escrita pensando en la experiencia del jugador. Buscamos mecánicas fluidas y satisfactorias.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <Palette size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arte con Alma</h3>
                <p className="text-gray-600">
                  Nuestros diseños buscan evocar calidez y alegría. Queremos que nuestros juegos se sientan como un abrazo virtual.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-2xl mt-8 transform rotate-1 hover:rotate-0 transition-transform">
              <p className="font-bold text-lg italic">
                "Sinami Studio nació en la mesa de nuestra cocina, entre tazas de café y bocetos en servilletas. Hoy, es nuestra forma de compartir nuestra felicidad con el mundo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
