# nuxt-static-landing-page-template (nuxt, typescript, tailwind, tailgrids)

## Demo

<https://funny-cassata-d205d1.netlify.app//>

## General

Setting up small static websites to display a company, a product or a portfolio often takes much more time than initially expected. This repository is intended to simplify the start for developers who like to use vue / nuxt. Due to the server side rendering functionality of nuxt, the site is also relatively performant and quite good for SEO.

Warning: Components in ./components are free components provided by tailgrids. The terms of use of tailgrids apply. <https://tailgrids.com/license>

## Includes

- Nuxt 3
- Typescript
- Tailwind (incl night mode)
- Sass
- ESLint using @nuxt/eslint <https://eslint.nuxt.com/packages/module> and Prettier
- Tailgrids
- Localization with nuxt/i18n
- Icons via Iconify
- Smooth Scrolling
- Image Optimization using `<NuxtImg>`
- animations and intersection animations via animista
- placeholder images generated with dalle <https://openai.com/index/dall-e-3/> and logoipsum <https://logoipsum.com/>
- contact form via web3form <https://web3forms.com/>
- cookie banner

## Future Work

- some wow element to landing page
- analytics via posthog or umami
- error analytics via sentry
- seo optimization, check google speed insights
- ai chat via ?
- hotchar ?
- uptimerobot ?

## Need to be replaced during setup

- components for sections in ./components
- public/favicon.ico
- available languages in localization files in ./locales and in navbar element
- add additional animations from animista to `assets\css\main.css`

## Documentations

- Nuxt: <https://nuxt.com/docs/getting-started/introduction>
- Nuxt/Typescript: <https://nuxt.com/docs/guide/concepts/typescript>
- Nuxt/Tailwind: <https://tailwindcss.com/docs/guides/nuxtjs>
- TailGrids: <https://tailgrids.com/> (using free components)
- i18n: <https://i18n.nuxtjs.org/>
- Iconify: <https://iconify.design/docs/usage/css/tailwind/>
- all icons: <https://icon-sets.iconify.design/>
- animista: <https://animate.style/>

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
