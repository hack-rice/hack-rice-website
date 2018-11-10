# HackRice

🚀 This site is deployed at [hack.rice.edu](https://hack.rice.edu).

### About

![](https://i.imgur.com/Rc6yZAC.png)

This app is built using [Next.js](https://github.com/zeit/next.js/) and [Rebass](https://rebassjs.org).

### Getting Started

##### 1. Clone repository.

```
$ git clone https://github.com/achalvs/synapse-frontend && cd synapse-frontend
```

##### 2. Install `npm` packages.

```
$ npm install
```

This may take a few minutes.

##### 3. Start the process in developer mode (hot-reloading).

```
$ npm run dev
```

##### 4. Make content edits.

Open the `content` folder in your preferred text editor. You should see a list of files:

```
content
|__sponsors.js
|__judging.js
|__about.js
|__tracks.js
|__faq.js
|__intro.js
|__calendar.js
```

Open the file corresponding to the component you'd like to update. Let's say we want to add an item
to the calendar.

```javascript
const friday = [
  {
    time: "4:30 PM",
    title: "Early Registration",
    detail: "Registration begins for participants."
  },
  ...
]
```

We infer that adding an event is adding an object to an array corresponding to each day of the hackathon.

Now, let's say we want to push this change to production. Note that this project is configured to be hosted
on Github Pages, and thus the script `next deploy` in `package.json` will need to be modified to your
mode of deployment. Run the following command:

```
$ next deploy
```

This will:
- build the app
- export all static files to the `docs` directory
- create `docs/CNAME` with the domain `hack.rice.edu` for GH Pages to recognize a custom domain
- create `docs/.nojekyll` to prevent `_next/...` from being ignored by Github Pages when deployed, and
- stage & commit the `docs` folder. 

You will need to run

```
$ git push
```
in order for changes to be reflected on the hosted Github Pages project. 

### Contributors

- Achal Srinivasan ([achalvs](https://github.com/achalvs))