let _Environments = {
  production: {
    BASE_URL: 'https://battlebeasts-api.echolot.io',
    CARD_PRODUCT: 'android.test.purchased',
    DECK_PRODUCT: 'android.test.purchased',
  },
  staging: {BASE_URL: '', API_KEY: ''},
  development: {
    BASE_URL: 'http://localhost:5000',
    CARD_PRODUCT: 'android.test.purchased',
    DECK_PRODUCT: 'android.test.purchased',
  },
};

var Environment = _Environments.production;
export default Environment;
