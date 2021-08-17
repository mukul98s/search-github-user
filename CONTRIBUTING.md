A big welcome and thank you for considering contributing to this project! It’s people like you that make it a reality for users in our community.

Reading and following these guidelines will help us make the contribution process easy and effective for everyone involved. It also communicates that you agree to respect the time of the developers managing and developing these open source projects. In return, we will reciprocate that respect by addressing your issue, assessing changes, and helping you finalize your pull requests.

> **_⚠ Those who wants to contribute on the repo, from now, before pushing/committing your changes, please make sure you run command `npm run format` or `yarn format` or use Prettier plugin to automatically format your code. We want to maintain consistency._**

### Code of Conduct

We take our open source community seriously and hold ourselves and other contributors to high standards of communication. By participating and contributing to this project, you agree to uphold our [Code of Conduct](https://github.com/mukul98s/search-github-user/blob/master/CODE_OF_CONDUCT.md).

### Issues

Issues should be used to report problems with the library, request a new feature, or to discuss potential changes before a PR is created.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

#

### Pull Requests

PRs to our libraries are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

- Only fix/add the functionality in question **OR** address wide-spread whitespace/style issues, not both.
- Add unit or integration tests for fixed or changed functionality (if a test suite already exists).
- Address a single concern in the least number of changed lines as possible.
- Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).

### Fork & Pull

In general, we follow the **fork-and-pull**


#### Steps :

**1. Fork the repository to your own Github account**

**2. Clone the forked project to your machine**

   ```bash
    git clone https://github.com/<YOUR_GITHUB_USERNAME>/search-github-user.git
   ```

**3. Add Upstream or the remote of the original project to your local repository**

   ```bash
   # check remotes
   git remote -v
   git remote add upstream https://github.com/mukul98s/search-github-user.git
   ```

**4. Make sure you update the local repository**

   ```bash
   # Get updates
   git fetch upstream
   # switch to master branch
   git checkout master
   # Merge updates to local repository
   git merge upstream/master
   # Push to github repository
   git push origin master
   ```

**5. Create a branch locally with a succinct but descriptive name**

   ```bash
   git checkout -b branch-name
   ```

**6. Commit changes to the branch**

   ```bash
   # Stage changes for commit i.e add all modified files to commit
   git add .
   # You can also add specific files using
   # git add <filename1> <filename2>
   git commit -m "your commit message goes here"
   # check status
   git status
   ```

**7. Following any formatting and testing guidelines specific to this repository**

**8. Push changes to your fork**

   ```bash
   git push origin branch-name
   ```

**9. Open a PR in our repository and follow the PR template so that we can efficiently review the changes.**

**10. After the pull request was merged, fetch the upstream and update the default branch of your fork**
