declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Saturday, 09 March 2024 13:26:34 CET',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
};
