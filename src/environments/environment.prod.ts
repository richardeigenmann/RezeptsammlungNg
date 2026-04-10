import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Friday, 10 April 2026 09:30:23 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
