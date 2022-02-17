// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'nodewar-b8275',
    appId: '1:89047886589:web:f20a156db3164d03612c94',
    storageBucket: 'nodewar-b8275.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyB98nzRSDlLMO7FKIb48rAVCCfnS-onaAE',
    authDomain: 'nodewar-b8275.firebaseapp.com',
    messagingSenderId: '89047886589',
    measurementId: 'G-SL6EGN3LSR',
  },
  production: false,
  discordAuth: "https://discord.com/api/oauth2/authorize?client_id=943507734484090950&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin-callback&response_type=code&scope=identify%20email",
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
