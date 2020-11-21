let _Environments = {
    production:  {BASE_URL: '', API_KEY: ''},
    staging:     {BASE_URL: '', API_KEY: ''},
    development: {BASE_URL: 'http://localhost:5000', API_KEY: ''},
}

var Environment = _Environments['development']
export default Environment;