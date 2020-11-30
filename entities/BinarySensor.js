

class BinarySensor {
  constructor(client, config) {
    this.client = client;
    this.config = config;
    
    this.active = false;
  }
  
  turnOn() {
    this.active = true;
    client.publish(entityMute.config.state_topic, 'ON');
  }
  
  turnOff() {
    this.active = false;
    client.publish(entityMute.config.state_topic, 'OFF');
  }
  
  toggle() {
    this.active = !this.active;
    client.publish(entityMute.config.state_topic, this.active ? 'ON' : 'OFF');
  }
}

module.exports = BinarySensor;
