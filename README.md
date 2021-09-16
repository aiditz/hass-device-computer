App allows you to integrate your Windows machine with Home Assistant.

*Installation*

1. Install [node.js](https://nodejs.org/).

2. Run `bin/turn_off_display.exe`, allow it to run without confirmation.

3. Copy the `hass-config.dist.yaml` file to the `hass-config.yaml`.

4. [Optionally] If you want to rename your sensors' names, edit the `hass-config.yaml` file. 

   Warning! This sensors' names must be unique across Home Assistant. So, if you want to install this script on more than 1 computer, you must rename the sensors.

5. Copy content of the `hass-config.yaml` file to the `configuration.yaml` file in the home assistant data folder.

6. Run `node ./app`.