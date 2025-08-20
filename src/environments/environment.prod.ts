import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Wednesday, 20 August 2025 22:35:07 CEST',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
