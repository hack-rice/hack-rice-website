# Hack Rice Site

This is a Jekyll + Github pages site. Pushing to the repository on the `master` branch compiles the site and pushes it live. If developing non-live changes, don't push to `master`!

## Building the Site

The site is built upon Jekyll, a static site generator. Install Jekyll via ruby gem. There's a good installation guide [here](http://jekyllrb.com/docs/installation/). You might have to update ruby or several other dependencies as well.

To test locally, start the server. Run `jekyll serve --watch` at the root directory of the codebase. The site will be hosted on `http://localhost:4000/` (there's a chance your port could be different).

Jekyll will now compile the site any time a change is made to a file in this directory. These changes compile static files that can be found in the `_site` directory.

To push changes live, simply push the `master`. Github automatically compiles the site and makes the changes live!

## SASS

The design for the site was built using SASS, a markup language that compiles down to CSS. It's really awesome. [Check out the documentation](http://sass-lang.com/) for details on how to install and compile the SCSS files.
