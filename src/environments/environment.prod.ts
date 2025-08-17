import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Monday, 18 August 2025 00:00:13 CEST',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
