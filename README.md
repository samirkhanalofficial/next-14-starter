# NextJS Starter

## Getting Started

Node version: v20.15.1
Please follow these steps to setup your project,

1. Clone the project `git clone <project-url>`
2. open the project & install all dependiencies
   ```bash
   npm i
   ```
3. Run the project in development mode

   ```bash
   npm run dev
   ```

4. Run the storybook

   ```bash
   npm run storybook
   ```

5. Run the project in production mode
   - Add this to `.env`
   ```bash
   NODE_ENV=production
   ```
   - Run this command
   ```bash
   npm run build && npm start
   ```

## Rules

- create a branch with your username and feature name
  ```bash
  git branch <your-github-username>/subject/<feature-name>
  git checkout <your-github-username>/subject/<feature-name>
  ```
  Example:
  ```bash
  git branch samirkhanalofficial/feature/navbar
  git checkout samirkhanalofficial/feature/navbar
  ```
- After the task is assigned to you via `project management tool` i.e. `basecamp/jira`.
  - mark it as `IN PROGRESS` when starting the project
  - mark it as `IN REVIEW` when your code is in review. Make sure to create a pull request to `TEST` branch. Assign a code review request to your senior developer.
  - mark it as `TESTING` when tester is testing the branch on TEST branch.
  - mark it `DONE` after finishing the task
- Use commit convenctions for better commit message. Check docs at [Commit Lint](https://commitlint.js.org/guides/getting-started.html)

  - For title use these specified keywords:
    - `feat` : New feature
    - `fix` : Bug fix
    - `docs` : Documentation changes
    - `style` : Changes that do not affect the meaning of the code (white-space, formatting, etc.)
    - `refactor` : Code changes that neither fix a bug nor add a feature
    - `perf` : Performance improvement
    - `test` : Adding missing tests or correcting existing tests
    - `build` : Changes that affect the build system or external dependencies (example scopes: npm)
    - `ci` : Changes to CI configuration files and scripts
    - `chore` : Other changes that don't modify src or test files
    - `revert` : Reverts a previous commit
  - For Scope use these specified keywords:
    - `setup` : Project setup
    - `config` : Configuration files
    - `deps` : Dependency updates
    - `feature` : Feature-specific changes
    - `bug` : Bug fixes
    - `docs` : Documentation
    - `style` : Code style/formatting
    - `refactor` : Code refactoring
    - `test` : Tests
    - `build` : Build scripts or configuration
    - `ci` : Continuous integration
    - `release` : Release related changes
    - `other` : Other changes

```
git commit -am '<title>(scope): <commit-message>'
```

Example:

```bash
git commit -am 'fix(config): tsconfig updated to avoid unused imports and variables'
```
