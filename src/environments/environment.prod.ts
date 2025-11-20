import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Thursday, 20 November 2025 20:11:07 CET',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
