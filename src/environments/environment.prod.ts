declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Friday, 15 December 2023 17:52:22 CET',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
};
