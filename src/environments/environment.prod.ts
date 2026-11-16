import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Monday, 16 November 2026 09:22:36 CET',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
