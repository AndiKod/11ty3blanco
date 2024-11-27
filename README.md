# Blanco

A simple, Tailwind4 & VanillaCSS Eleventy starter with no over complexity.

---

You can use your favorite tool to install and run scripts,
NPM, PNPM, Deno, or here as an example using pnpm:

```bash
pnpm i
```

It will create the correspondant lock file.
That's why we didn't commity any for that minimal starter.

Fire the dev server on localhost:8080

```bash
pnpm run dev
```

To build the site:

```bash
pnpm run build
```

This will generate the `_site` folder with the built site. CSS and JS will be minified.

## Make it yours

And remove the remote git repository from a terminal in the root.

```bash
rm -rf .git
# Eventually initiate a new git repository
git init
# ... then add your own remote.
```

## Why?

Sometime you just need a clean start and build on top of it. This starter is a good choice if you want to start a new project from scratch without heavy opinionated setup, or need a little sandbox.

The folders structure follows the standard set by the official blog-starter, it use the automatic native light/dark native colorscheme via `meta color-scheme` and minify css & js on build.
