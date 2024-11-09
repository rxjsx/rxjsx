# How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/singhrishabh93/Hacktoberfest-2022/pulls)

- Take a look at the existing [issues](https://github.com/singhrishabh93/Hacktoberfest-2022/issues) or [create a new issue](https://github.com/rxjsx/Hacktoberfest-2022/issues/new)!
- [Fork the repo](https://github.com/singhrishabh93/Hacktoberfest-2022/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[pull request](https://github.com/singhrishabh93/Hacktoberfest-2022/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your pull request to help us understand the effects of the changes proposed in your PR.

## Build

The toolchain required for development include:
- Node.js
- NPM

To install all dependencies:

```bash
npm install
```

To test the project:

```bash
npm test
```

When creating a new pull request, please make sure the test coverage is 100%.

## How to Make a Pull Request

**1.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/rxjsx.git
```

**2.** Navigate to the newly created `rxjsx` project directory:

```bash
cd rxjsx
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/rxjsx/rxjsx.git
```

**4.** Create a new branch:

```bash
git switch -c <your-branch-name>
```

**5.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

Alternatively, use git CLI way to sync forked repository with origin repository:

```bash
git pull --rebase upstream master
```

> Note. To learn more, please refer to the [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for syncing.

**6.** Make your changes to the source code.

**7.** Stage your changes and commit:

⚠️ **Make sure** not to run the commands `git add .` or `git add *`. Instead, stage your changes for each file/folder.

```bash
git add <file/folder>
```

```bash
git commit -m "<your_commit_message>"
```

**8.** Push your local commits to the remote repository:

```bash
git push origin <your-branch-name>
```

**9.** Create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**Congratulations!** You've made your first contribution to [**RxJSx**](https://github.com/rxjsx/rxjsx/graphs/contributors)! 

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the RxJSx project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

