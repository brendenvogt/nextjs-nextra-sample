// theme.config.js
export default {
    github: "https://github.com/brendenvogt",
    projectLink: 'https://github.com/brendenvogt/nextjs-nextra-sample', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/brendenvogt/nextjs-nextra-sample/tree/master', // base URL for the docs repository
    titleSuffix: ' – Brenden Vogt',
    nextLinks: true,
    prevLinks: true,
    search: false, // enable this when you want to implement search
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `${new Date().getFullYear()} © Brenden Vogt.`,
    footerEditLink: `Edit this page on GitHub`,
    logo: (
      <>
        <svg>...</svg>
        <span>Next.js Static Site Generator</span>
      </>
    ),
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Nextra: the next docs builder" />
        <meta name="og:title" content="Nextra: the next docs builder" />
      </>
    ),
  }
  