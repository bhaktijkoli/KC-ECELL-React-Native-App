import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  fullscreen: {
    flex: 1,
  },
  input: {
    marginLeft:10,
    marginRight:10,
  },
  button: {
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  primary: {
    backgroundColor: '#2ecc71',
  },
  primaryText: {
    color:'#2ecc71',
  },
  white: {
    color: '#FFF'
  },
});

module.exports = Styles;

module.exports.gradientColors = ['#89f7fe', '#66a6ff']
