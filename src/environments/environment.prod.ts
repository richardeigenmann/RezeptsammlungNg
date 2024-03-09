declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Sunday, 10 March 2024 00:44:03 CET',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
  bootstrapVersion: require('../../package.json').dependencies['bootstrap'],
};
