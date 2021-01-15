# @compiled/website

**The documentation website for [Compiled](https://github.com/atlassian-labs/compiled).**

## Getting started

```sh
yarn # Install dependencies
yarn build:examples # Build examples that are using in the website
```

### Run landing page

This is the home page of the website.

```sh
yarn start:landing
```

### Run docs

This is the actual documentation.

```sh
yarn start:docs
```

## FAQ

### Why is this not in the monorepo?

This site is written with Compiled.
We want to make sure the consumption story works,
completely,
with no impacts from the monorepo.

### Why is the landing page and docs separate apps?

Previously we had the the landing page be a TypeScript build,
and the docs be a Babel build.

We haven't done the work to consolidate them yet since we've standardized on Babel.
