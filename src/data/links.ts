export const links = {
  home: '/',
  about: '#about',
  sponsors: '#sponsors',
  faq: '#faq',
  register: {
    participant: 'https://dashboard.wildhacks.net/registration/',
    judge:
      'https://docs.google.com/forms/d/e/1FAIpQLScyJ4OXjGQOlXSNj-nAZzdcXA1eQWc1URs2fsVpe2dahjlzXw/viewform',
  },
  dashboard: 'https://dashboard.wildhacks.net/',

  email: 'mailto:wildhacks@northwestern.edu?subject=[GENERAL INQUIRY] Website',
  social: {
    linkedin: 'https://www.linkedin.com/company/wildhacks/',
    instagram: 'https://www.instagram.com/wildhacks/',
  },
} as const;

export type Links = typeof links;
