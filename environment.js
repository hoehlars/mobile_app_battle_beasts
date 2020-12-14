let _Environments = {
  production: {BASE_URL: '', API_KEY: ''},
  staging: {BASE_URL: '', API_KEY: ''},
  development: {
    BASE_URL: 'https://battlebeasts-api.echolot.io',
    CARD_PRODUCT: 'android.test.purchased',
    DECK_PRODUCT: 'android.test.purchased',
  },
};

var Environment = _Environments.development;
export default Environment;
