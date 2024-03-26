import config from '~/config.json';

export const navLinks = [
  {
    label: 'Utilities',
    pathname: '/utilities',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Discord',
    url: `https://discord.com/users/${config.discord_id}`,
    icon: 'discord',
  },
  {
    label: 'X',
    url: `https://x.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'GitHub',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
