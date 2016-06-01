# DevMtn Companion App
Official devmountain student companion app.

## Setting up the project

From the project root directory, run:

```bash
$ npm install
```

Then rebuild node-sass to reset environment variables:

```bash
$ npm rebuild node-sass
```

## Using the server

The node server should be run in a seperate terminal instance:

```bash
$ node index.js
```

## Using Ionic

Ionic lives in the /client directory.

Serve the Ionic app in a seperate terminal with:

```bash
$ ionic serve --port 9001
```

## Editing the front-end

Any javascript files / changes should be edited in the /src folder.

Babel will compile any js files in the /src folder into the www/js folder on the front-end automagically

Project Board: [Companion Trello](https://trello.com/b/kJjFH4UV/dm-companion)

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.
