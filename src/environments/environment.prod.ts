import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Wednesday, 11 February 2026 20:40:46 CET',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
