App allows you to integrate your Windows machine with Home Assistant.

*Installation*
  
1. Run:

``` 
npm i
npm i -g pm2
npm i -g pm2-windows-service

pm2-service-install -n hass_device_computer
pm2 start app
pm2 save
```

2. Run `bin/turn_off_display.exe`, allow it to run without confirmation.

3. Copy content of the `hass-config.yaml` file to the `configuration.yaml` file in the home assistant data folder.
