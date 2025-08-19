import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Monday, 18 August 2025 01:14:04 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
