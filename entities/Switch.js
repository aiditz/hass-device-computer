const Entity = require('./Entity');

class Switch extends Entity {
  constructor() {
    super(...arguments);
    
    this.active = false;

    this.client.on('message', async (topic, message) => {
      const value = message.toString() === 'ON'; 
      this.log('Got command: active =', value);
      
      await this.toggle(value);
      
      value ? this.onCommandOn() : this.onCommandOff();
    });
  }
  
  async onConnect() {
    this.client.subscribe(this.config.command_topic, err => {
      if (err) {
        throw err;
      }
    });
  }
  
  async onCommandOn() {
  
  }
  
  async onCommandOff() {
  
  }
  
  async turnOn() {
    this.active = true;
    this.client.publish(this.config.state_topic, 'ON');
  }
  
  async turnOff() {
    this.active = false;
    this.client.publish(this.config.state_topic, 'OFF');
  }
  
  async toggle(value) {
    if (arguments.length === 0) {
      value = !this.active;
    }
    
    this.active = value;
    this.client.publish(this.config.state_topic, value ? 'ON' : 'OFF');
  }
}

module.exports = Switch;
