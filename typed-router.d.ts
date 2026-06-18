import type { appRoutes } from './src/app/app.routes';

declare module 'angular-typed-router' {
  interface UserTypedRoutes {
    routes: typeof appRoutes;
  }
  interface RouteParamTypes {

  }
}
