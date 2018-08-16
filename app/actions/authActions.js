import {AsyncStorage} from 'react-native';

module.exports.setData = (data) => {
  return {type: 'SET_AUTH', payload: data}
}
module.exports.getData = (data) => {
  return {type: 'SET_AUTH', payload: data}
}
module.exports.saveAuth = (data) => {
  AsyncStorage.setItem('authdata', JSON.stringify(data))
}
module.exports.getAuth = () => {
  return AsyncStorage.getItem('authdata');
}
