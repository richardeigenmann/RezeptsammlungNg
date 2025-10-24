import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Friday, 24 October 2025 18:58:23 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
