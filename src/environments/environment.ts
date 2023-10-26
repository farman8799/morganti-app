// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: '',
  WooCommerce: {
    API_URL: 'https://morgantiluxury.com/wp-json/wc/v3/',
    CONSUMER_KEY: 'ck_ec268086198dd321148000cc8c28a35f85525c00',
    CONSUMER_SECRET: 'cs_fcd73d02e6d0d53249ba5017b8d51c4e95dac8b6'
  },
  stripe: {
    publishablekey: 'pk_test_51O0LvBSIIkTQPUQYpHY394SiFUjhQab65OeNjd280lGg8SRBOsD2bIn1apBIHqlnnkqqExQ8vxyVpKBXyuEWnyXx00ezv3g5W8',
    secretkey: 'sk_test_51O0LvBSIIkTQPUQYAcAQtLnEMg25R3yaFCF7BvOymBmswvePoAsGOxal7TtQH7wQJ4BcylXzHXwCqXoAEXgnI49i00p3V1HtFO'
  },
  api: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
