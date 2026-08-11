import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Tuesday, 11 August 2026 15:43:55 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
