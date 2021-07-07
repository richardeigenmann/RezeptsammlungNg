# RezeptsammlungNg

This project started off as Deboarah Kuratas Pluralsight Angular: Getting Started project. I have modified if step by step to hopefully something useful.

<https://richardeigenmann.github.io/RezeptsammlungNg/index.html>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Prepare

```bash
cp /richi/Src/Rezeptsammlung/recipesutf8.json /richi/Src/RezeptsammlungNg/recipes.json
npm run updateBuildTimeStamp
```

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

```bash
ng build --configuration production --base-href "https://richardeigenmann.github.io/RezeptsammlungNg/"
ngh
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

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Updating the recipes

```bash
cp /richi/Src/Rezeptsammlung/recipesutf8.json /richi/Src/RezeptsammlungNg/src/api/products/recipes.json
```

## Upgrading

```bash
ng update
npm upgrade
npm update
```

## Further help

<https://angular.io>
