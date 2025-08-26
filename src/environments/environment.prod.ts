import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Tuesday, 26 August 2025 22:27:00 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
