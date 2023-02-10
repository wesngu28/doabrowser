# DOA3Browser

A web app providing quick information for the playable characters of Dead or Alive 3, Tecmo's 2001 Xbox release. The main intention of making this project was to mainly learn a bit of Solid Start.

## Developing

Once you've cloned the project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.