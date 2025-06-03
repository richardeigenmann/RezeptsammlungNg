// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const require: any;

export const environment = {
  production: true,
  buildTimeStamp: 'Tuesday, 03 June 2025 18:10:52 CEST',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/core'],
  bootstrapVersion: require('../../package.json').dependencies['bootstrap'],
};
