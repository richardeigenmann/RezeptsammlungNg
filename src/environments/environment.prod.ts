import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Thursday, 06 November 2025 16:55:56 CET',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
