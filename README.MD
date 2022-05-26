# Boilerplate - NextJs + Typescript + Jest + Testing Library setup

If you want to start a project using the basic setup, this is the right repository for you. Please feel free to share and contribute.

--

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Basic NextJS files and directories structure (suggestion)

```
/app
  \_ /.next/
  \_ /components/
      \_ Button/
          \_ button.spec.tsx
          \_ button.styles.tsx
          \_ index.tsx
  \_ /pages/
      \_ _api
      \_ _app.tsx
      \_ index.jsx
  \_ /public/
      \_ favicon.ico
      \_ header.png
  \_ /redux/ => Or any other state management tool
      \_ folders...
  \_ /test/
      \_ pages/
        \_ index.test.tsx
      \_ test-utils.js/
  \_ /styles/
        \_ global.css
  \
  \_ .babelrc
  \_ .eslintrc
  \_ .env
  \_ babel.config.js
  \_ jest.config.js
  \_ jest.setup.js
  \_ next.config.js
  \_ tsconfig.json
  \_ package.json
  \_ README.md

```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. You can also create your components at components folder.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/)

And the amazing tutorials I found and helped me built this boilerplate:

- [Set Up Jest and React Testing Library with Next.js](https://www.kyrelldixon.com/blog/setup-jest-and-react-testing-library-with-nextjs)
- [How To Quickly Add Jest To Your Next.js App](https://dev.to/ashconnolly/how-to-quickly-add-jest-to-your-next-js-app-1h32)
- [Setting Up Testing Library with NextJS](https://frontend-digest.com/setting-up-testing-library-with-nextjs-a9702cbde32d)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the documentatiojn [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
