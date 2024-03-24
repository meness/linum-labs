# Contribution

- Make sure [Husky](https://typicode.github.io/husky/#/) runs
- Keep dependencies up-to-date on each release
- Run `bun lint` manually if there are codebase changes
- Use `git push --no-verify` to skip the hook if you believe there is no codebase change
- `git push --force` and `git rebase` commands are forbidden since they give the ability to manipulate the history
- Follow [YAGNI](https://en.wikipedia.org/wiki/You_aren't_gonna_need_it) and [SOLID](https://blog.stackademic.com/react-native-masters-solid-principles-in-react-react-native-a1b8df8d261d) principles
- Keep the codebase clean by removing unused stuff

## App Folder Structure

```plain
src
├── app
├── assets
│   ├── css
│   └── images
├── common
│   ├── abis
│   └── consts
├── components
├── configs
├── entities
├── helpers
├── hooks
├── layouts
└── providers
```

### src/components

Keep shared components. Not shared components go the corresponding `_components` directory of each page.

## Style Guide

We follow [Google](https://google.github.io/styleguide/tsguide.html) and [Airbnb](https://github.com/airbnb/javascript) style guides with a little customization.

### Customization

- `kebab-case` filenames
- End filenames with the top parent name (i.e. `components/lorem.component.tsx`)
- Always use TypeScript (`.ts`) unless you inevitably need JavaScript (`.js`)
- Use strict types; prevent `any` and `unknown` wherever possible
- Avoid acronyms and abbreviations (unless the abbreviation is much more widely used than the long form, such as URL or HTML)
- Use named exports everywhere, but pages

## Conventional Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with the following defined types.

- All lowercase (unless the name is much more widely used)

| Type     | Description                                                                            |
| -------- | -------------------------------------------------------------------------------------- |
| fix      | Represents bug fixes for the application                                               |
| ui       | Changes the user interface / user experience                                           |
| refactor | Represents different or better implementations for the codebase                        |
| feat     | Adds new features to the application, not the codebase                                 |
| chore    | Represents improvements for the codebase. We usually use this type if others don't fit |
| test     | Represents changes for tests                                                           |
| revert   | Represents a reverted commit; use the commit hash as the message                       |
| perf     | Represents SEO / performance improvements for the application                          |
| ci       | Represents changes for continuous integration / continuous delivery                    |

## Translating Strings

Follow [this article](https://lokalise.com/blog/translation-keys-naming-and-organizing/).
