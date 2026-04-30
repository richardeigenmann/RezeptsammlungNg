import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Friday, 01 May 2026 00:27:38 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
