This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Open Prisma Studio
enter following command and this will open Prosma studio 
```bash
 npx prisma studio
```
navigate to [http://localhost:5555](http://localhost:5555) if not redirected automatically


## Few Prisma Commands to remember

```bash
npm install prisma --save-dev
npx prisma init
npx prisma migrate dev --name your_migration_name
npx prisma migrate dev
npx prisma generate # this will genearte your prisma client

```

## Few Git Commands to remember

To commit any changes 

```bash
git add *
git commit -m "your commit name"
git push 

```

create a new branch 

```bash 
git checkout new_branch_name #this could also use for switching branches
git branch # this command will show all branches
```

revert a commit, if you want your files to remain untouch just ``` git reset ``` 
if you also want your files to be changed according to the last commit 

```bash 
git reset --hard HEAD~1
#you may need to force push after that 
git push --force
```



You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
