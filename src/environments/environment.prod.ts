import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Sunday, 30 November 2025 11:52:58 CET',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
