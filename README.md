# RezeptsammlungNg

This is an Angular web application to browse my recipe collection.

<https://richardeigenmann.github.io/RezeptsammlungNg/index.html>

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Prepare for deployment:

```bash
bash
cd /tmp/Rezeptsammlung
php /richi/Src/Rezeptsammlung/createRecipeJsonUtf8.php
git add .
git commit -m "update recipes index"
git push
exit

npm run updateBuildTimeStamp
```

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

```bash
ng build --configuration production --base-href "https://richardeigenmann.github.io/RezeptsammlungNg/"
ngh
```

```bash
ng build --configuration netlify --base-href "https://master--rezeptsammlung.netlify.app/"
```

https://richardeigenmann.github.io/RezeptsammlungNg

For Cloud Foundry:

```bash
ng build --prod
cf push
# after first one:
cf restage Rezeptsammlung
```

https://rezeptsammlung.cfapps.io

See <https://github.com/angular-schule/angular-cli-ghpages>

## Running unit tests

Run `ng test` to execute the unit tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Setting up on a new computer 

```bash
su -
npm install -g @angular/cli
npm install -g angular-cli-ghpages
```

## Upgrading

```bash
ng update
npm upgrade
npm update
```

## Further help

<https://angular.io>

Sometimes there can be the error <code>Watchpack Error (watcher): Error: EMFILE: too many open files</code>

Give it more nodes in the kernel:

```bash
cat /proc/sys/fs/inotify/max_user_instances
sudo sysctl fs.inotify.max_user_instances=256
```
