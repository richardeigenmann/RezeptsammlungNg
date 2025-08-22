import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Saturday, 23 August 2025 00:10:13 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
