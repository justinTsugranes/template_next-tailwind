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

If you don't want any sort of _blog/post_ page routing, you can delete the "pages/posts". Could delete the MDX Dependencies and Gray-Matter also, if you aren't going to use .mdx files at all.

If you don't want Module CSS import, then you can delete "layouts/layout.module.css" and "styles/utils.module.css". Then, remove the imports from the top of "layouts/layouts.js"

#### Components Folder

- Header: Blank page
- Footer: Blank page
- Navbar: Blank page
- SEO: Blank page

#### Data

-

#### Layouts

- layout.js
- layout.module.css - For CSS Modules

#### Lib

-

#### Pages

- \_app.js
- \_document.js
- index.js
- [posts]
  - Blank mdx-sample page with links to next/mdx info.
    - Gray Matter installed. For adding graymatter to pages, neen to add a const requirement
  - [id].js page - Generates static pages from the Posts directory
    - There is some formatting in the Post object that pulls in formatting from styles/utils.module.css
  - Date formatting is automatic from date-fns and has a 'data'.js' file in the components directory.

#### Public

- [Images Folder]
- Use for all static content like .jpgs

#### Scripts

-

#### Styles

- global.css - For Global Styles
- utils.module.css - for CSS Modules
  - Currently only using this in 'posts'

#### Config Files & JSON

jest.config
next.config
costcss.config
prettier.config
tailwind.config
eslintrc.json
package.json
tsconfig.json - currently only using typescript in jest.config
note: will change jest config to .js
