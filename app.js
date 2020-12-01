
const mqtt = require('mqtt');
const yaml = require('js-yaml');
const fs = require('fs');
const Mute = require('./entities/Mute');
const Display = require('./entities/Display');

const config = yaml.safeLoad(fs.readFileSync('./hass-config.yaml', 'utf8'));
const client  = mqtt.connect('mqtt://192.168.1.79');

const mute = new Mute(client, config.switch[0]);
const display = new Display(client, config.switch[1]);
    
client.on('connect', () => {
  client.publish(config.switch[0].availability_topic, 'online');
});

process.on('beforeExit', () => {
  client.publish(config.switch[0].availability_topic, 'offline');
});