# Dicty Hooks 🎣

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-hooks)  
![GitHub action](https://github.com/dictyBase/dicty-hooks/workflows/Testing/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/dicty-hooks/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-hooks)  
[![Dependency Status](https://david-dm.org/dictyBase/dicty-hooks/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-hooks/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dicty-hooks/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-hooks/develop?type=dev)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-hooks)](https://codeclimate.com/github/dictyBase/dicty-hooks/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-hooks)](https://codeclimate.com/github/dictyBase/dicty-hooks/issues)
[![Maintainability](https://badgen.net/codeclimate/maintainability/dictyBase/dicty-hooks)](https://codeclimate.com/github/dictyBase/dicty-hooks)  
![Issues](https://badgen.net/github/issues/dictyBase/dicty-hooks)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-hooks)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-hooks)
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-hooks)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-hooks)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-hooks)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-hooks)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-hooks/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-hooks/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-hooks)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-hooks)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-hooks?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-hooks?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-hooks)](https://codeclimate.com/github/dictyBase/dicty-hooks/code)  
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,dictyBase/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9476993)
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,DSC/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9438930)

This is a React library of hooks that can be reused throughout any dictyBase web applications.

## Install

```bash
yarn add dictyBase/dicty-hooks
```

To install a specific version, add a tag to the end:

```bash
yarn add dictyBase/dicty-hooks#1.0.0
```

## Usage

Examples of how to use each hook are provided individually.

- [useFetchRefreshToken](./docs/useFetchRefreshToken.md)
- [useIntersectionObserver](./docs/useIntersectionObserver.md)
- [useVirtualList](./docs/useVirtualList.md)
- [useFooter](./docs/useFooter.md)
- [useNavbar](./docs/useNavbar.md)

## Development

- Clone the `develop` branch of this repository
- Run `yarn install`
- Create a new branch (i.e. `feature/useFoo`)
- Add custom hook to `/src/hooks`
- Add unit tests to `/test`
- Add export to `/src/index.ts`
- Add documentation to `/docs`
- Generate new build `yarn build`
- Commit all changes and open a pull request. If all checks pass, it is ready
  to merge to `develop`.

If you are ready to cut a new release, you can then merge into `master`. This
will trigger a GitHub Action that uses `semantic-release` to create a new tag.

_Note: all content must be written in TypeScript._

## Active Developers

<a href="https://sourcerer.io/cybersiddhu"><img src="https://sourcerer.io/assets/avatar/cybersiddhu" height="80px" alt="Sourcerer"></a>
<a href="https://sourcerer.io/wildlifehexagon"><img src="https://sourcerer.io/assets/avatar/wildlifehexagon" height="80px" alt="Sourcerer"></a>
