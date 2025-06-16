# RezeptsammlungNg

This is an Angular web application to browse Richard Eigenmann's recipe collection. Experience it here:

<https://richardeigenmann.github.io/RezeptsammlungNg/index.html>

## Who is this repo for?

This repo currently is of use to it's developer only since the application is driven of a JSON that is extracted from the Recipes in the https://github.com/richardeigenmann/Rezeptsammlung repo.

## Setting up on a new computer

Prerequisites: You need to have NodeJs and Angular 20 installed

```bash
su -
npm install -g @angular/cli
npm install -g angular-cli-ghpages
```

## How to start a local development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to build for prod

Prepare for deployment:

```bash
npm run updateBuildTimeStamp
```

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

```bash
ng build --configuration production --base-href "https://richardeigenmann.github.io/RezeptsammlungNg/"
ngh --dir dist/browser
```

https://richardeigenmann.github.io/RezeptsammlungNg


## How to run the unit tests

Run `ng test` to execute the unit tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Upgrading

```bash
ng update
npm upgrade
npm update
npm run updateBuildTimeStamp
```

## Further help

<https://angular.io>

Sometimes there can be the error <code>Watchpack Error (watcher): Error: EMFILE: too many open files</code>

Give it more nodes in the kernel:

```bash
cat /proc/sys/fs/inotify/max_user_instances
sudo sysctl fs.inotify.max_user_instances=256
```
