const Switch = require('./Switch');
const { execFile } = require('child_process');
const path = require('path');

const BIN_PATH = path.resolve(__dirname, '../bin/turn_off_display.exe');

class Display extends Switch {
  async onCommandOff() {
    const child = execFile(BIN_PATH, (err, stdout, stderr) => {
      if (err) {
        throw err;
      }
      this.log('display off done');
      this.log(stdout);
    });
    
  }
}

module.exports = Display;