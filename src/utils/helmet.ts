import favicon from 'assets/images/favicon.png';

const title = 'Create Ueno App';
const description = 'The easiest and fastest way to create new projects.';

export const helmet = {
  title,
  titleTemplate: '%s - Ueno',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: favicon }],
};
