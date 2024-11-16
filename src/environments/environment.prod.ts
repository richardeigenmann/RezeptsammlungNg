declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Sunday, 17 November 2024 00:19:48 CET',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
  bootstrapVersion: require('../../package.json').dependencies['bootstrap'],
};
