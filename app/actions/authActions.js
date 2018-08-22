import {AsyncStorage} from 'react-native';

module.exports.setData = (data) => {
  return {type: 'SET_AUTH', payload: data}
}
module.exports.setTopNavigation = (data) => {
  return {type: 'SET_TOPNAVIGATION', payload: data}
}
module.exports.saveToken = (token) => {
  AsyncStorage.setItem('authtoken', token)
}
module.exports.getToken = () => {
  return AsyncStorage.getItem('authtoken');
}
