import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Friday, 02 October 2026 20:55:30 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
