import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Thursday, 22 October 2026 11:07:49 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
