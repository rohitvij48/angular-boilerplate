// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authority: 'https://portal.decosclouddev.com/login',
  clientId: 'col-por-app',
  redirectUri: 'http://localhost:4200/auth-callback',
  postLogoutRedirectUri: 'http://localhost:4200/info',
  responseType: 'code',
  scope: 'openid profile email',
  microservice1Url: 'http://localhost:5002/microservice1Url',
  microservice2Url: 'http://localhost:5003/microservice2Url'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
