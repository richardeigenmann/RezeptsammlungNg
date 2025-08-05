import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Tuesday, 05 August 2025 01:15:47 CEST',
  apiEndpoint: 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
