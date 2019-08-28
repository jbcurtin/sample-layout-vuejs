import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
});

export const EncodeParams = (params) => {
    let result = []
    var key
    for (key in params) {
      result.push([key, encodeURIComponent(params[key])].join('='))
    }
    return result.join('&')
  }
  
  client.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    // eslint-disable-next-line
    console.error(error.response.status)
  })
  
  export default client
