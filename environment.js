// source: https://stackoverflow.com/questions/33117227/setting-environment-variable-in-react-native#:~:text=React%20native%20does%20not%20have,promote%20component%20modularity%20and%20reusability.&text=This%20creates%20a%20singleton%20environment,the%20scope%20of%20your%20app.

let _Environments = {
    production:  {BASE_URL: '', API_KEY: ''},
    staging:     {BASE_URL: '', API_KEY: ''},
    development: {BASE_URL: 'http://192.168.1.104:5000', API_KEY: ''},
}

var Environment = _Environments['development']
export default Environment;