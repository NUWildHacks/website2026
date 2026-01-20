export type FaqCategory =
  | 'general'
  | 'registration-teams'
  | 'logistics'
  | 'support';

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  order?: number;
};
export const categoryMeta: Record<
  FaqCategory,
  { time: string; slug: string; title: string }
> = {
  general: { time: '01:00', slug: '/general', title: 'General' },
  'registration-teams': {
    time: '02:00',
    slug: '/registration-teams',
    title: 'Registration & Teams',
  },
  logistics: { time: '03:00', slug: '/logistics', title: 'Logistics' },
  support: { time: '04:00', slug: '/support', title: 'Support' },
};

export const faqs: FaqItem[] = [
  {
    id: 'what-is-wildhacks',
    category: 'general',
    question: 'What is WildHacks?',
    answer:
      'WildHacks is Northwestern University’s annual hackathon where students come together to build projects over a weekend.',
    order: 1,
  },
  {
    id: 'when-is-wildhacks',
    category: 'general',
    question: 'When is WildHacks?',
    answer:
      'WildHacks 2026 will take place from Saturday, April 11, 2026, to Sunday, April 12, 2026. More details will be released closer to the event.',
    order: 2,
  },
  {
    id: 'where-is-wildhacks',
    category: 'general',
    question: 'Where is WildHacks?',
    answer:
      'WildHacks will take place on the Northwestern University Evanston campus. More details will be released closer to the event.',
    order: 3,
  },
  {
    id: 'what-will-i-build',
    category: 'general',
    question: 'What will I build?',
    answer:
      'At the start of the event, we will release a set of tracks, and your project must align with one of them. The tracks are designed to be broad enough to encourage creativity while providing clear guidance to ensure all submissions are developed during the hackathon.',
    order: 4,
  },

  {
    id: 'eligibility',
    category: 'registration-teams',
    question: 'Who is eligible to participate?',
    answer:
      'All university students are eligible to participate in WildHacks! High school students are not eligible to participate in WildHacks.',
    order: 1,
  },
  {
    id: 'never-coded-before',
    category: 'registration-teams',
    question: "What if I've never coded before?",
    answer:
      'WildHacks is open to students of all experience levels! We will send out resources, and we will have a Discord server where you can ask questions.',
    order: 2,
  },
  {
    id: 'required-to-have-team',
    category: 'registration-teams',
    question: 'Am I required to have a team to register?',
    answer:
      'No, you are not required to register with a team. Opportunities to find team members will be available before and during the event.',
    order: 3,
  },
  {
    id: 'registering-team',
    category: 'registration-teams',
    question:
      'I have a team in mind. Can my friend register for the entire team?',
    answer: 'NO. All members of your team must independently register.',
    order: 4,
  },

  {
    id: 'sleeping-showering',
    category: 'logistics',
    question: 'Will there be sleeping / showering accommodations?',
    answer:
      'Yes. A designated room will be available overnight on Saturday, April 11, 2026, for participants who wish to rest; we recommend bringing a pillow and blanket. Showers are available at Mudd Library, but please bring your own toiletries and towel.',
    order: 1,
  },
  {
    id: 'travel-reimbursement',
    category: 'logistics',
    question: 'Will transportation be reimbursed?',
    answer: 'Transportation will not be reimbursed.',
    order: 2,
  },
  {
    id: 'how-to-prepare',
    category: 'logistics',
    question: 'How can I prepare for WildHacks?',
    answer:
      'WildHacks is partnering with other computing clubs on campus to host optional, introductory workshops during the week leading up to the hackathon.',
    order: 3,
  },
  {
    id: 'staying-for-event',
    category: 'logistics',
    question: 'Do I have to stay for the full event?',
    answer:
      'No, hackers may leave early. However, you must be present at the closing ceremony on the afternoon of Sunday, April 12, 2026, in order to claim prizes.',
    order: 4,
  },

  {
    id: 'getting-in-touch',
    category: 'support',
    question: 'How can I get in touch?',
    answer:
      "Send us an email at wildhacks@northwestern.edu! We'd be happy to answer any questions about the event or steps to get involved.",
    order: 1,
  },
  {
    id: 'sponsoring',
    category: 'support',
    question: "I'm interested in sponsoring WidlHacks. Who should I contact?",
    answer:
      "Send us an email at wildhacks@northwestern.edu! We'd be happy to talk!",
    order: 2,
  },
];
