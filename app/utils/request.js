import axios from 'axios';
import Route from './route'

module.exports.post = (url, data) => {
  return axios.post(Route(url), data);
}
module.exports.get = (url, data) => {
  return axios.get(Route(url), data);
}
module.exports.setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = token;
}
