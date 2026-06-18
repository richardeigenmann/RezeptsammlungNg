import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Thursday, 18 June 2026 16:26:19 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
