import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50 pt-12 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Hablemos
          </h1>
          <p className="text-xl text-gray-600">
            ¿Tienes dudas, sugerencias o simplemente quieres saludar? <br/>
            Estamos aquí para escucharte.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Info Side */}
            <div className="bg-orange-500 p-10 text-white flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                 <p className="text-orange-100 mb-8 leading-relaxed">
                   Somos un equipo pequeño pero respondemos lo más rápido posible. ¡No seas tímid@!
                 </p>
                 
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <Mail className="shrink-0" />
                     <span>sinami.studio22@gmail.com</span>
                   </div>
                   <div className="flex items-start gap-4">
                     <MapPin className="shrink-0" />
                     <span>España</span>
                   </div>
                 </div>
               </div>
               
               <div className="mt-12">
                 <div className="w-16 h-16 bg-white/20 rounded-full circle-decorator"></div>
               </div>
            </div>

            {/* Form Side */}
            <div className="p-10">
              <form action="mailto:sinami.studio22@gmail.com" method="GET" encType="text/plain" className="space-y-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Asunto</label>
                  <input 
                    type="text" 
                    name="subject"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    placeholder="¿Sobre qué quieres hablar?"
                  />
                </div>
                
                <div>
                  <label htmlFor="body" className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    name="body"
                    id="body"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  Enviar Mensaje
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Esto abrirá tu cliente de correo predeterminado.
                </p>
              </form>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};