/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export const PLATFORM_NAME = 'Toon Wallplug Plugin';

/**
 * This must match the name of your plugin as defined the package.json
 */
export const PLUGIN_NAME = 'homebridge-toon-smartplug';

export default interface ToonConfig {
    accessory: "Toon-Wallplug";
    name: string;
  
    // Agreement Index is used to select the correct address if a user has different addresses.
    agreementIndex?: number;
  
    // API token from https://api.toon.eu/toonapi-accesstoken?tenant_id=eneco&client_id=<consumer_key>
    apiToken: string;
  }