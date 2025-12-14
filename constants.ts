import { Game, TeamMember } from './types';

const BASE_URL = import.meta.env.BASE_URL || '/';
const logoLocal = `${BASE_URL}assets/logo.png`;
const bannerLocal = `${BASE_URL}assets/banner.png`;

export const ASSETS = {
  LOGO: logoLocal,
  BANNER: bannerLocal,
  FALLBACK_LOGO: "https://play-lh.googleusercontent.com/CrgKetEiEoRStO4eOL4GCcFqFwQ3qImntkSTgQll86cxP4kwr4JvRzKUP6GnxAdYbDQ=s188",
  FALLBACK_BANNER: "https://play-lh.googleusercontent.com/08mJOl4L8B9gV4V65Wfi9t29yUlWO513HiBPhERgsU4fP8o8h708AiKJH6IJpZ3lcA=w7680-h4320",
  PLACEHOLDER_APP: `${BASE_URL}assets/placeholder-app.svg`,
  PLACEHOLDER_AVATAR: `${BASE_URL}assets/avatar-placeholder.svg`
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
    thumbnailUrl: `https://play-lh.googleusercontent.com/_4ACHU0CaAC0Isw-q9aMUQMs3dBCec-JstegoKjKHs4eMdsbgcgMMWoXr-mK1jsG0R7o4_z5SLVyGiH-wk1d7_g=w480-h960`, 
    heroUrl: `https://play-lh.googleusercontent.com/_4ACHU0CaAC0Isw-q9aMUQMs3dBCec-JstegoKjKHs4eMdsbgcgMMWoXr-mK1jsG0R7o4_z5SLVyGiH-wk1d7_g=w480-h960`,
    platform: "Mobile",
    status: "Released",
    appLink: "https://play.google.com/store/apps/details?id=com.mrodr.yonunca"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Miguel R.",
    role: "Co-Fundador & Desarrollador",
    bio: "Ingeniería y lógica. El encargado de que todo funcione suavemente y sin bugs.",
    avatarUrl: `${BASE_URL}assets/team-miguel.png`
  },
  {
    name: "Nadia N.",
    role: "Co-Fundadora & Artista",
    bio: "Co-Fundadora y diseño visual. La mente detrás de la estética única de nuestros juegos.",
    avatarUrl: `${BASE_URL}assets/team-nadia.png`
  }
];
