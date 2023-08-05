# Disney Quote of the Day

## A statically generated blog example using Next.js, Markdown, and TypeScript

This was initialized using the [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) example from [Next.js](https://nextjs.org/) which showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The quotes are stored in `/_quotes` as Markdown files with front matter support. Adding a new Markdown file in there will create a new quote.

To create the quotes it uses [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every quote is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Production Site URLs
* [dqotd.me](https://dqotd.me)
* [dqotd.vercel.app](https://dqotd.vercel.app)
* [disneyquoteoftheday.com](https://disneyquoteoftheday.com)


## Usage

1. `npm install`
2. `npm run dev`

The blog should be up and running on [http://localhost:3000](http://localhost:3000)!

# Notes

`dqotd` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
