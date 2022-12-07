## Project Description

This app allows you to enter a VIN number and lookup the vehicle's information using the [NHTSA's vPIC API](https://vpic.nhtsa.dot.gov/api/).

It is built with Vue 3 using TypeScript, Pinia, Vuetify and Vitest.

Although a big fan of SASS, I Decided to leverage Vuetify as much as possible and use only their utility classes and helpers.

## Working Demo

https://vin-lookup-one.vercel.app

Test VIN numbers:

```sh
3AKJHHDR3KSKX6689
3AKJHHDR1KSKX6688
3AKJHHDRXKSKX6687
3AKJHHDR8KSKX6686
1JJV532D7KL148311
1JJV532D9KL147936
1JJV532D2KL148295
3H3V532C0LR431008
```

## Running Project Locally

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
