declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Sunday, 16 March 2025 10:15:43 CET',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
  bootstrapVersion: require('../../package.json').dependencies['bootstrap'],
};
