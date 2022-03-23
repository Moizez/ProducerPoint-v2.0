import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs()

import App from './App';
registerRootComponent(App);
