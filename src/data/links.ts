export const links = {
  home: '/',
  about: '#about',
  sponsors: '#sponsors',
  faq: '#faq',
  register: {
    participant: '#', // TODO: Update with actual registration link
    judge: '#',
  },
  dashboard: 'https://dashboard.wildhacks.net/', // TODO: Update with actual dashboard link

  email: 'mailto:wildhacks@northwestern.edu',
  social: {
    linkedin: 'https://www.linkedin.com/company/wildhacks/',
    instagram: 'https://www.instagram.com/wildhacks/',
  },
} as const;

export type Links = typeof links;
