# Boilerplate

## Next.js, TailwindCSS, Jest, Node.js

Boilerplate Includes folder for components, data, layouts, utils, pages, and scripts. Not pre-configured for any specific sort of site. Just configured for an all-around development environment.

Here are some of the core dependencies and features:

- [Next.js](https://nextjs.org/) - The React Framework
- [React.js](https://reactjs.org/) - JavaScript Library For Building User Interfaces
- [TailwindCSS](https://tailwindcss.com/) - PostCSS Framework
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [SWC](https://swc.rs/) - For minificiation. Included in `create-next-app`. 20x faster than Babel on a single thread and 70x faster on four cores.
- [SWR](https://swr.vercel.app/) - React Hooks for Data Fetching. Highly recommended if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.
- [Node.js](https://nodejs.dev/) - Cross-platform JavaScript run-time environment
- [Prettier Plugin](https://prettier.io/) - Formatting
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS for React and Vue
- [PurgeCSS](https://purgecss.com/plugins/postcss.html) - Removed unused CSS.
- [ESLint](https://eslint.org/) - Find and fix problems in JavaScript
- [classnames](https://github.com/JedWatson/classnames) - Simple library that lets you toggle class names easily
- [MDX Ready](https://mdxjs.com/) - Write JSX directly in your markdown files. Use .mdx extension insead of .md
  - [gray-matter](https://github.com/jonschlinkert/gray-matter) - For adding Frontmatter to MDX files
  - [Remark](https://www.npmjs.com/package/remark-package-dependencies) - Inject to markdown the list of dependencies of your package
  - [Remark MDX](https://www.npmjs.com/package/remark-mdx) - Remark plugin to support the MDX syntax
  - [date-fns](https://date-fns.org/v2.16.1/docs/format) - Return the formatted date string in the given format
- [robots.txt](https://developers.google.com/search/docs/advanced/robots/intro) - Tells search engine crawlers which URLs the crawler can access on your site.

### To Use

Click `Use Template`

Install Dependencies `npm i`

Run Development Server `npm run dev`

Erase main content of index.js.

Edit info on package.json

#### Components Folder

- Header: Blank page
- Footer: Blank page
- Navbar: Blank page
- SEO: Blank page

#### Data

-

#### Layouts

- layout.js

#### Lib

-

#### Pages

- \_app.js
- \_document.js
- index.js
- /api

#### Public

- [Images Folder]
- Use for all static content like .jpgs

#### Scripts

-

#### Styles

- global.css - For Global Styles using TailwindCSS

#### Config Files & JSON

jest.config
next.config
costcss.config
prettier.config
tailwind.config
eslintrc.json
package.json
tsconfig.json - currently only using typescript in jest.config

- note: will change jest config to .js

  "dependencies": {
  "@heroicons/react": "^1.0.6",
  "@mdx-js/loader": "^2.1.2",
  "@next/mdx": "^12.2.4",
  "@tailwindcss/typography": "^0.5.4",
  "classnames": "^2.3.1",
  "date-fns": "^2.29.1",
  "eslint-plugin-prettier": "^4.2.1",
  "gray-matter": "^4.0.3",
  "next": "latest",
  "next-remote-watch": "1.0.0",
  "react": "latest",
  "react-dom": "latest",
  "react-is": "^17.0.2",
  "react-router-dom": "^6.3.0",
  "remark": "^14.0.2",
  "remark-html": "^15.0.1",
  "remark-mdx": "^2.1.2",
  "styled-components": "^5.2.3",
  "swr": "^1.3.0",
  "ts-node": "^10.9.1"
  },
  "devDependencies": {
  "@fullhuman/postcss-purgecss": "^4.1.3",
  "@types/jest": "^28.1.6",
  "@types/node": "^18.6.5",
  "@types/react": "^18.0.17",
  "@types/styled-components": "5.1.25",
  "autoprefixer": "^10.4.8",
  "eslint": "^8.2.0",
  "eslint-config-airbnb": "19.0.4",
  "eslint-config-next": "12.2.4",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-import": "^2.25.3",
  "eslint-plugin-jsx-a11y": "^6.5.1",
  "eslint-plugin-react": "^7.28.0",
  "eslint-plugin-react-hooks": "^4.3.0",
  "jest": "^28.1.3",
  "postcss": "^8.4.16",
  "postcss-preset-env": "^7.7.2",
  "prettier": "^2.7.1",
  "prettier-plugin-tailwindcss": "^0.1.13",
  "tailwindcss": "^3.1.8",
  "ts-jest": "^28.0.7",
  "typescript": "^4.7.4"
