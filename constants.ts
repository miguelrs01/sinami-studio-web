import { Game, TeamMember } from './types';

// NOTA: Para producción, guarda tus imágenes reales en una carpeta '/public/assets' 
// y cambia estas URLs por rutas locales como: "/assets/logo.png"

export const ASSETS = {
  // Usando un placeholder estable temático hasta que subas tu logo local
  LOGO: "https://api.dicebear.com/7.x/identicon/svg?seed=SinamiStudio&backgroundColor=transparent", 
  // Banner temático de videojuegos/creatividad (estable)
  BANNER: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
};

export const SAFE_ASSETS = {
    LOGO: ASSETS.LOGO, 
    BANNER: ASSETS.BANNER
}

export const GAMES: Game[] = [
  {
    id: "yo-nunca",
    title: "Yo Nunca",
    description: "El juego de beber definitivo para tus fiestas.",
    longDescription: "¿Crees conocer a tus amigos? 'Yo Nunca' es la aplicación esencial para animar cualquier reunión, fiesta o previa. Descubre secretos inconfesables, ríe sin parar y rompe el hielo con cientos de preguntas picantes y divertidas. Diseñado con una interfaz vibrante y fácil de usar para que solo te preocupes de llenar tu vaso.",
    // Imágenes temáticas de fiesta/neon para representar el juego
    thumbnailUrl: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop", 
    heroUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    platform: "Mobile",
    status: "Released",
    appLink: "https://play.google.com/store/apps/details?id=com.mrodr.yonunca"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Miguel R.",
    role: "Co-Founder & Dev",
    bio: "Ingeniería y lógica. El encargado de que todo funcione suavemente y sin bugs.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel&backgroundColor=c0aede"
  },
  {
    name: "Nadia N.",
    role: "Co-Founder & Art",
    bio: "Creatividad y diseño visual. La mente detrás de la estética única de nuestros juegos.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia&style=circle&backgroundColor=ffdfbf"
  }
];