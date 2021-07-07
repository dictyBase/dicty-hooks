# Dicty Hooks 🎣

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-hooks)
![GitHub action](https://github.com/dictyBase/dicty-hooks/workflows/Node%20CI%20Develop/badge.svg)  
[![codecov](https://codecov.io/gh/dictyBase/dicty-hooks/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-hooks)
[![Maintainability](https://badgen.net/codeclimate/maintainability/dictyBase/dicty-hooks)](https://codeclimate.com/github/dictyBase/dicty-hooks)  
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-hooks/develop)  
[![Funding](https://badgen.net/badge/Funding/Rex%20L%20Chisholm,dictyBase,DCR/yellow?list=|)](https://reporter.nih.gov/project-details/10024726)

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
- [useFetch](./docs/useFetch.md)

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://cybersiddhu.github.com/"><img src="https://avatars3.githubusercontent.com/u/48740?v=4" width="100px;" alt=""/><br /><sub><b>Siddhartha Basu</b></sub></a><br /><a href="https://github.com/dictyBase/dicty-hooks/issues?q=author%3Acybersiddhu" title="Bug reports">🐛</a> <a href="https://github.com/dictyBase/dicty-hooks/commits?author=cybersiddhu" title="Code">💻</a> <a href="#content-cybersiddhu" title="Content">🖋</a> <a href="https://github.com/dictyBase/dicty-hooks/commits?author=cybersiddhu" title="Documentation">📖</a> <a href="#maintenance-cybersiddhu" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Misc badges

![Issues](https://badgen.net/github/issues/dictyBase/dicty-hooks)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-hooks)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-hooks)  
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-hooks)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-hooks)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-hooks)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-hooks)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-hooks/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-hooks)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-hooks)  
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-hooks?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-hooks?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-hooks)](https://codeclimate.com/github/dictyBase/dicty-hooks/code)
