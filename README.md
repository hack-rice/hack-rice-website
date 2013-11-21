# Hack Rice Site

This is a Jekyll + Github pages site. Pushing to the repository on the `master` branch compiles the site and pushes it live. If developing non-live changes, don't push to `master`!

## How to develop and run locally

The site is built upon Jekyll, a static site generator. Install Jekyll via ruby gem. There's a good installation guide [here](http://jekyllrb.com/docs/installation/). You might have to update ruby or several other dependencies as well.

To test locally, start the server. Run `jekyll --auto --server` at the root directory of the codebase. The site will be hosted on `http://localhost:4000/` (there's a chance your port could be different).

Jekyll will now compile the site any time a change is made to a file in this directory. These changes compile static files that can be found in the `_site` directory.