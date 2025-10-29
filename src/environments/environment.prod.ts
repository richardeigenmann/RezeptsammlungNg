import packageInfo from '../../package.json';

export const environment = {
  production: true,
  buildTimeStamp: 'Wednesday, 29 October 2025 08:53:59 CET',
  appVersion: packageInfo.version,
  angularVersion: packageInfo.dependencies['@angular/core'],
  bootstrapVersion: packageInfo.dependencies['bootstrap'],
};
