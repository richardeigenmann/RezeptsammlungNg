declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Tuesday, 29 July 2025 23:07:14 CEST',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
  bootstrapVersion: require('../../package.json').dependencies['bootstrap'],
};
