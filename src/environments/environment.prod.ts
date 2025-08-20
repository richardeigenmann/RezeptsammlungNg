import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Wednesday, 20 August 2025 23:01:18 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
