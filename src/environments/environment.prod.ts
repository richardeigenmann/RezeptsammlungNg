declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Saturday, 23 September 2023 17:48:25 CEST',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
};
