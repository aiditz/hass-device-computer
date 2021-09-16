const Switch = require('./../core/Switch');
const loudness = require('loudness');

class VolumePlus extends Switch {
  async onCommandOn() {
    const volume = await loudness.getVolume();
    await loudness.setVolume(volume - 2);
  }
}

module.exports = VolumePlus;