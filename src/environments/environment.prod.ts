import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Saturday, 09 May 2026 09:54:09 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
