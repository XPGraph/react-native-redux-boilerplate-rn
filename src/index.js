import {AppRegistry} from 'react-native';
import Route from './route/route.js';
import {name as appName} from '../app.json';

AppRegistry.registerComponent(appName, () => Route);
