

class Entity {
  constructor(client, config) {
    this.client = client;
    this.config = config;
    
    client.on('connect', () => {
      this.onConnect();
    });
  }
  
  async onConnect() {
    // override this
  }
  
  log() {
    const myName = `[${this.constructor.name}] ${this.config.name || this.config.id}`;
    const params = [`${myName}:`, ...arguments];
    
    console.log(...params);
  }
}

module.exports = Entity;
