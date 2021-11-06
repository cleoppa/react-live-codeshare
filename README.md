## Getting Started

- [Preview](https://code2gether-web-react.vercel.app/) - Shows the output on the master branch. (without database)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/code/{id}](http://localhost:3000/api/hello). This endpoint can be edited in `src/pages/code/[id].ts`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Integrate Prisma & PostgreSQL

This application needs a PostgreSQL server for data storage. We handle this easily with Prisma, all you have to do is create a PostgreSQL server.

Go to the `./prisma/` folder in the root directory and create a file named `.env`.

```env
DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

After this process, go to the command line and type `npx prisma db pull`.

## Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
