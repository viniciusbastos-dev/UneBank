import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({host: '192.168.0.116'}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron; // Torna o Reactotron globalmente acessível como `console.tron`

export default Reactotron;
