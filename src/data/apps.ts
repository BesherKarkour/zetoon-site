export type AppStatus = 'live' | 'coming-soon' | 'in-development';

export interface Feature {
  emoji: string;
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  /** schema.org applicationCategory, e.g. LifestyleApplication */
  category: string;
  status: AppStatus;
  statusLabel: string;
  playUrl?: string;
  appStoreUrl?: string;
  features: Feature[];
  faqs: Faq[];
}

export const apps: AppInfo[] = [
  {
    slug: 'masbaha',
    name: 'Masbaha',
    tagline: 'Digital Islamic prayer beads with real physics.',
    description:
      'Masbaha digitises the traditional tasbih experience. Instead of a plain tap counter, a bead hangs from a fiber string — drag it down, release, and a tuned spring simulation snaps it back. Every valid release advances your dhikr counter with a click and a gentle vibration, just like the real thing.',
    icon: '/images/masbaha-icon.png',
    category: 'LifestyleApplication',
    status: 'live',
    statusLabel: 'Available on Google Play',
    playUrl: 'https://play.google.com/store/apps/details?id=com.zetoon.masbaha',
    features: [
      {
        emoji: '📿',
        title: 'Physics-based beads',
        text: 'Drag a bead and watch it snap back via a tuned spring simulation — mass, stiffness, and damping.',
      },
      {
        emoji: '📋',
        title: 'Tasbeeh plans',
        text: 'Ordered phrase sequences (e.g. 33× each) that auto-advance as each target is met.',
      },
      {
        emoji: '🔔',
        title: 'Daily reminders',
        text: 'Up to five daily notifications so your dhikr routine never slips.',
      },
      {
        emoji: '📳',
        title: 'Haptics & audio',
        text: 'A satisfying click and configurable vibration on every valid release.',
      },
      {
        emoji: '🌐',
        title: '50 bead designs',
        text: 'The classic bead, or country flags rendered as 3D glass globes.',
      },
      {
        emoji: '🌍',
        title: '8 languages',
        text: 'Full localization including right-to-left Arabic and Urdu.',
      },
    ],
    faqs: [
      {
        q: 'Is Masbaha free?',
        a: 'Yes. Masbaha is free to download and use, supported by a small banner ad. Optional bead designs — country flags rendered as 3D glass globes and four handcrafted Islamic jewel beads — are available as one-time purchases on Google Play. The classic bead and the Palestine flag design are free for everyone.',
      },
      {
        q: 'How is Masbaha different from other tasbih counter apps?',
        a: 'Most digital tasbih apps are simple tap counters. Masbaha renders a real bead hanging on a string: you drag it down, release it, and a tuned spring simulation snaps it back with a click and a gentle vibration. Counting dhikr feels like using physical prayer beads, not pressing a button.',
      },
      {
        q: 'What are tasbeeh plans?',
        a: 'A tasbeeh plan is an ordered sequence of dhikr phrases, each with its own target count, that advances automatically as you complete each phrase. The built-in default is the classic post-prayer tasbeeh — 33× SubhanAllah, 33× Alhamdulillah, 33× Allahu Akbar — and you can create and edit your own plans.',
      },
      {
        q: 'Does Masbaha work offline?',
        a: 'Yes. There is no account and no backend — your counter, plans, and settings are stored on your device, and all bead designs are bundled with the app, so nothing about counting dhikr needs a connection.',
      },
      {
        q: 'Can Masbaha remind me to do dhikr?',
        a: 'Yes. You can schedule up to five daily reminder notifications at times you choose, so your dhikr routine never slips.',
      },
      {
        q: 'Which languages does Masbaha support?',
        a: 'Eight languages: English, Arabic, Turkish, Urdu, Indonesian, Malay, French, and Bengali — including full right-to-left layouts for Arabic and Urdu. The app follows your device language automatically.',
      },
      {
        q: 'Is Masbaha available for iPhone?',
        a: 'Masbaha is currently available for Android on Google Play. An iOS version is planned — check back here for updates.',
      },
    ],
  },
  {
    slug: 'chromashift',
    name: 'ChromaShift',
    tagline: 'A 2048-style puzzle where color drives every merge.',
    description:
      'Slide same-colored candies together to climb the color tiers, and land the right color on every target square before you run out of moves. Familiar 2048 sliding — but merging is driven by color, wrapped in a glossy candy look.',
    icon: '/images/chromashift-icon.png',
    category: 'GameApplication',
    status: 'coming-soon',
    statusLabel: 'Coming soon',
    features: [
      {
        emoji: '🎨',
        title: 'Color-tier merging',
        text: 'Two same-colored circles collide and merge into the next color tier — one merge per swipe.',
      },
      {
        emoji: '🎯',
        title: 'Target squares',
        text: 'Each level defines targets: land a matching-color circle on one to eliminate it.',
      },
      {
        emoji: '🧠',
        title: 'Move-limit strategy',
        text: 'Clear every target within the move limit. Plan swipes, not just reactions.',
      },
      {
        emoji: '🍬',
        title: 'Glossy candy design',
        text: 'A bright, tactile visual style that makes every merge feel delicious.',
      },
    ],
    faqs: [
      {
        q: 'How is ChromaShift different from 2048?',
        a: 'The swipe-to-slide feel is familiar, but merging is driven by color instead of numbers: two same-colored candies collide and merge into the next color tier. On top of that, each level has target squares and a move limit, so you are solving a hand-designed puzzle rather than chasing an endless high score.',
      },
      {
        q: 'How do levels work?',
        a: 'Each level defines target squares on the board. Land a candy of the matching color on a target to eliminate it, and clear every target before you run out of moves to complete the level.',
      },
      {
        q: 'When will ChromaShift be released?',
        a: 'ChromaShift is coming soon to Google Play. Check back on this page — the store badge will appear here as soon as it is live.',
      },
    ],
  },
  {
    slug: 'mymemorycards',
    name: 'MyMemoryCards',
    tagline: 'AI-powered language flashcards from your own books.',
    description:
      'Upload a book or document in the language you are learning, and an AI pipeline extracts the vocabulary worth knowing — together with the real sentences it appears in — and turns it into flip cards, chapter by chapter, translated into your language.',
    icon: '/images/mymemorycards-icon.svg',
    category: 'EducationalApplication',
    status: 'in-development',
    statusLabel: 'In development',
    features: [
      {
        emoji: '📚',
        title: 'Your own books',
        text: 'PDF, EPUB, or DOCX in any language — your reading becomes your study material.',
      },
      {
        emoji: '🤖',
        title: 'AI-extracted vocabulary',
        text: 'The words worth learning, with the complete original sentence for context.',
      },
      {
        emoji: '📖',
        title: 'Chapter-based decks',
        text: 'Decks mirror the book structure so you can study alongside your reading.',
      },
      {
        emoji: '🔁',
        title: 'Simple flip cards',
        text: 'Word and real sentence on the front; translation and definition on the back.',
      },
    ],
    faqs: [
      {
        q: 'How does MyMemoryCards create flashcards?',
        a: 'You upload a book or document in the language you are learning, and an AI pipeline reads it chapter by chapter, picks out the vocabulary worth knowing, and turns each word into a flip card together with the original sentence it appeared in — translated into your language.',
      },
      {
        q: 'Which file formats are supported?',
        a: 'PDF, EPUB, and DOCX, in any language. Whatever you are already reading can become your study material.',
      },
      {
        q: 'Why learn vocabulary from my own books instead of word lists?',
        a: 'Words stick better with context you care about. Every card comes from a real sentence in a book you chose, and decks mirror the book chapter by chapter, so studying and reading reinforce each other instead of competing for your time.',
      },
      {
        q: 'When will MyMemoryCards be available?',
        a: 'MyMemoryCards is currently in development. Check back on this page for release news.',
      },
    ],
  },
];

export function getApp(slug: string): AppInfo {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app slug: ${slug}`);
  return app;
}

export const SUPPORT_EMAIL = 'schiroapp@gmail.com';
