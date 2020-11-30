const Switch = require('./Switch');
const loudness = require('loudness');

class Mute extends Switch {
  constructor() {
    super(...arguments);
    
    setInterval(async () => { 
      const muted = await loudness.getMuted();
      
      if (muted !== this.active) {
        this.toggle(muted);
      }
    }, 1000);
  }

  async onConnect() {
    super.onConnect();
    
    const muted = await loudness.getMuted();
    this.log('muted =', muted);
    
    this.toggle(muted);
  }
  
  async onCommandOn() {
    await loudness.setMuted(true);
  }
  
  async onCommandOff() {
    await loudness.setMuted(false);
  }
}

module.exports = Mute;