export type Platform = 'Android' | 'iOS' | 'PC' | 'Web';

export interface App {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string; // Used for the card
  heroUrl: string; // Used for the detail page
  platform: Platform[];
  status: 'Released' | 'In Development' | 'Beta';
  appLink?: string; // Link to play or download
  appIosLink?: string; // Link to play or download on IOS
  comingSoon?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}