import favicon from 'assets/images/favicon.png';

const title = 'Agat BHP';
const description = 'Kompleksowa obsługa BHP i PPOŻ';

export const helmet = {
  title,
  titleTemplate: 'Agat BHP',
  htmlAttributes: { lang: 'pl' },
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
