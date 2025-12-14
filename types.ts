export interface Game {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string; // Used for the card
  heroUrl: string; // Used for the detail page
  platform: 'Mobile' | 'PC' | 'Web' | 'Cross-platform';
  status: 'Released' | 'In Development' | 'Beta';
  appLink?: string; // Link to play or download
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