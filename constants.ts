import { App, TeamMember } from './types';

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

export const APPS: App[] = [
  {
    id: "yo-nunca",
    title: "Yo Nunca",
    description: "El juego de beber definitivo para tus fiestas.",
    longDescription: "¿Crees conocer a tus amigos? 'Yo Nunca' es la aplicación esencial para animar cualquier reunión, fiesta o previa. Descubre secretos inconfesables, ríe sin parar y rompe el hielo con cientos de preguntas picantes y divertidas. Diseñado con una interfaz vibrante y fácil de usar para que solo te preocupes de llenar tu vaso.",
    thumbnailUrl: `https://play-lh.googleusercontent.com/_4ACHU0CaAC0Isw-q9aMUQMs3dBCec-JstegoKjKHs4eMdsbgcgMMWoXr-mK1jsG0R7o4_z5SLVyGiH-wk1d7_g=w480-h960`, 
    heroUrl: `https://play-lh.googleusercontent.com/_4ACHU0CaAC0Isw-q9aMUQMs3dBCec-JstegoKjKHs4eMdsbgcgMMWoXr-mK1jsG0R7o4_z5SLVyGiH-wk1d7_g=w480-h960`,
    screenshots: [
      `https://play-lh.googleusercontent.com/0w_dDHNLZ8t0EzJekQ4SvDWwQq2TaUnYJFSkx0ipXXD75iz89leo5VvAcGsxV_cuYZ0_k9PBbeS8twDhB3Y6=w1052-h592-rw`,
      `https://play-lh.googleusercontent.com/_4ACHU0CaAC0Isw-q9aMUQMs3dBCec-JstegoKjKHs4eMdsbgcgMMWoXr-mK1jsG0R7o4_z5SLVyGiH-wk1d7_g=w480-h960`,
      `https://play-lh.googleusercontent.com/eSnNX6V5QlSzusqv96ffq8El43qSF1Ii1tjJvyIdtq40e-oYa_qSz0nZsVh3hSY-a7GvNCj5uqhgNcO951AfuQ=w240-h480-rw`,
      `https://play-lh.googleusercontent.com/eSnNX6V5QlSzusqv96ffq8El43qSF1Ii1tjJvyIdtq40e-oYa_qSz0nZsVh3hSY-a7GvNCj5uqhgNcO951AfuQ=w480-h960`
    ],
    platform: ["Android", "Web"],
    status: "Released",
    appLink: "https://play.google.com/store/apps/details?id=com.mrodr.yonunca", // Android
    appIosLink: "",
    appWebLink: "https://sinamistudio.com/apps/yo-nunca/play/", // Web
    comingSoon: false
  },
    {
    id: "lo-digo",
    title: "¿Lo digo?",
    description: "El juego para saber que opinan tus amigos sobre tí.",
    longDescription: "¿Crees saber como te ven tus amigos? Descubre la realidad jugando a nuestro nuevo juego '¿Lo digo?' donde tus amigos y tú podreís confesar que es lo que opinais unos de otros, romped el hielo y aventuraros a pasar un buen rato juntos.",
    thumbnailUrl: `https://play-lh.googleusercontent.com/eSnNX6V5QlSzusqv96ffq8El43qSF1Ii1tjJvyIdtq40e-oYa_qSz0nZsVh3hSY-a7GvNCj5uqhgNcO951AfuQ=w240-h480-rw`, 
    heroUrl: `https://play-lh.googleusercontent.com/eSnNX6V5QlSzusqv96ffq8El43qSF1Ii1tjJvyIdtq40e-oYa_qSz0nZsVh3hSY-a7GvNCj5uqhgNcO951AfuQ=w240-h480-rw`,
    screenshots: [
      'https://play-lh.googleusercontent.com/ebprsLiCAbxA6nqKkmoPY-rsH-7FH1u6iN8WiFDcA7yLvBgl0odQV4_XQt2nJ0DPuXeqgnNTPDGIeHxhK59DsX8=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/9U4aMjl2V11-Tvm1Wg6SfEG-RniBWgu-OFLt-ZzAO-xTab35Oc_EHvTY27hXxTKCJOcfn6Z6TinwItouwY2vxQ=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/kCB8gepBT7lDqZxW9dBUcivC0wArq1gWtB_sBdbCFrmudNgCW30oWSWXpO1TKY92XCd6ocJhADS4Nutapo-X=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/InifM7r60umAFyu6kAhCCEW_pUEsrbbn5oiZeg-vwNHKIHXRnYApkfTRX0-hIqFDPdUQ38idjG7-m3DHEAbUCwE=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/ENbHxaQ73geC5sGbKrowj7RFBrZQwBA7BV_MQe1w_3861QBxJJk_1NoibxTJvd4FzYyA8wezdkzC_AwpBFFwFQ=w1052-h592-rw'

    ],
    platform: ["Android", "iOS"],
    status: "Released",
    appLink: "https://play.google.com/store/apps/details?id=com.sinami.lodigo", // Android
    appIosLink: "https://apps.apple.com/us/app/lo-digo/id6757181330",
    appWebLink: "", // Web
    comingSoon: false
  },
  {
    id: "housezen",
    title: "HouseZen",
    description: "Organizador de tareas compartidas del hogar.",
    longDescription: "",
    thumbnailUrl: ``, 
    heroUrl: ``,
    screenshots: [],
    platform: ["Android", "iOS", "Web"],
    status: "In Development",
    appLink: "", // Android
    appIosLink: "",
    appWebLink: "", // Web
    comingSoon: true
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Miguel R.",
    role: "Co-Fundador & Desarrollador",
    bio: "Ingeniería y lógica. El encargado de que todo funcione suavemente y sin bugs.",
    avatarUrl: `${BASE_URL}assets/avatar_miguel.png`
  },
  {
    name: "Nadia N.",
    role: "Co-Fundadora & Artista",
    bio: "Co-Fundadora y diseño visual. La mente detrás de la estética única de nuestras aplicaciones.",
    avatarUrl: `${BASE_URL}assets/avatar_nadia.png`
  }
];
