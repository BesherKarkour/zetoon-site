export type AppStatus = 'live' | 'coming-soon' | 'in-development';

export interface Feature {
  emoji: string;
  title: string;
  text: string;
}

export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  status: AppStatus;
  statusLabel: string;
  playUrl?: string;
  appStoreUrl?: string;
  features: Feature[];
}

export const apps: AppInfo[] = [
  {
    slug: 'masbaha',
    name: 'Masbaha',
    tagline: 'Digital Islamic prayer beads with real physics.',
    description:
      'Masbaha digitises the traditional tasbih experience. Instead of a plain tap counter, a bead hangs from a fiber string — drag it down, release, and a tuned spring simulation snaps it back. Every valid release advances your dhikr counter with a click and a gentle vibration, just like the real thing.',
    icon: '/images/masbaha-icon.png',
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
  },
  {
    slug: 'chromashift',
    name: 'ChromaShift',
    tagline: 'A 2048-style puzzle where color drives every merge.',
    description:
      'Slide same-colored candies together to climb the color tiers, and land the right color on every target square before you run out of moves. Familiar 2048 sliding — but merging is driven by color, wrapped in a glossy candy look.',
    icon: '/images/chromashift-icon.png',
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
  },
  {
    slug: 'mymemorycards',
    name: 'MyMemoryCards',
    tagline: 'AI-powered language flashcards from your own books.',
    description:
      'Upload a book or document in the language you are learning, and an AI pipeline extracts the vocabulary worth knowing — together with the real sentences it appears in — and turns it into flip cards, chapter by chapter, translated into your language.',
    icon: '/images/mymemorycards-icon.svg',
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
  },
];

export function getApp(slug: string): AppInfo {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app slug: ${slug}`);
  return app;
}

export const SUPPORT_EMAIL = 'schiroapp@gmail.com';
