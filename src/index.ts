import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { ExampleHomebridgePlatform } from './platform';

import ToonConfig from './settings';
import { ToonConnection } from './ToonAPI/ToonConnection';
import { ToonStatus } from './ToonAPI/ToonDefinitions';


/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, ExampleHomebridgePlatform);
};
