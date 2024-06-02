# nuxt-static-landing-page-template (nuxt, typescript, tailwind, tailgrids)

## Demo

<https://nuxt-static-landing-page-template.vercel.app/>

## General

Setting up small static websites to display a company, a product or a portfolio often takes much more time than initially expected. This repository is intended to simplify the start for developers who like to use vue / nuxt. Due to the server side rendering functionality of nuxt, the site is also relatively performant and quite good for SEO.

Warning: Components in ./components are free components provided by tailgrids. The terms of use of Tailgrid apply. <https://tailgrids.com/license>

## Includes

- Nuxt 3
- Typescript
- Tailwind
- Tailgrids
- Localization nuxt/i18n

## Todos

- icons
- github link navbar
- switch language
- toggle night mode
- image optimization, replace hardcoded vector images
- add subpages for terms of use, contact ...
- contact form
- responsiveness
- seo optimization
- speed insights
- cookiemanager
- smooth scrolling
- ai chat

## Need to be replaced during setup

- components for sections in ./components
- public/favicon.ico
- localization files in ./locales

## Documentations

- Nuxt: <https://nuxt.com/docs/getting-started/introduction>
- Nuxt/Typescript: <https://nuxt.com/docs/guide/concepts/typescript>
- Nuxt/Tailwind: <https://tailwindcss.com/docs/guides/nuxtjs>
- TailGrids: <https://tailgrids.com/> (using free components)
- i18n: <https://i18n.nuxtjs.org/>

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
