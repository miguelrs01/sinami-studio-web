import { Game, TeamMember } from './types';

const BASE_URL = import.meta.env.BASE_URL || '/';
const logoLocal = new URL('assets/logo.png', BASE_URL).toString();
const bannerLocal = new URL('assets/banner.png', BASE_URL).toString();

export const ASSETS = {
  LOGO: logoLocal,
  BANNER: bannerLocal,
  FALLBACK_LOGO: "https://api.dicebear.com/7.x/identicon/svg?seed=SinamiStudio&backgroundColor=transparent",
  FALLBACK_BANNER: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
};

export const SAFE_ASSETS = {
  LOGO: ASSETS.LOGO,
  BANNER: ASSETS.BANNER,
  FALLBACK_LOGO: ASSETS.FALLBACK_LOGO,
  FALLBACK_BANNER: ASSETS.FALLBACK_BANNER
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
