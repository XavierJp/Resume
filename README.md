# Resume

## Goal

This repo has two goals :

- learn [Astro](https://astro.build/)
- create an online resume, easy to access, edit and print (using [@media print](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Printing))

## Run

```
# to run the project

npm i
npm run dev
```

## Retex on Astro

PROS:

- great approach to islands/partial hydration. Only hydrate what you need (avoiding the Next.js/React mistake), while still retaining JavaScript strengths (being able to easily run code on the frontend) (avoiding HTMX, Hotwire limitations).
- excellent developer experience (good documentation, easy to set up).
- good name :)

CONS :
CONS:

- multiple UI frameworks can lead to confusion, with no clear way to do things. It's easy to end up writing half an app using .astro and the other half in React. It's not even clear if you can create pages entirely in React, so you might have to use at least some .astro files.
- tailwind CSS, along with PostCSS and Astro's way of injecting CSS. This can lead to similar issues with CSS management.
- sometimes, Astro's development mode behaves unexpectedly or weirdly.

For the aforementioned reasons, I would avoid using this in production with a large team. However, it sounds great for small marketing pages.

I would love to have an opinionated, React or Solid.js-based framework that can do exactly this.
