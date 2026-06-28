import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Sunday, 28 June 2026 14:05:49 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
