import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Wednesday, 29 April 2026 15:41:15 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
