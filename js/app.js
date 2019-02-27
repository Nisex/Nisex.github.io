var WIDTH = 360;
var HEIGHT = 640;

const App = function () {
     'use strict';

     this.VERSION = '0.0.1';
     this.IS_DEV = true;
}

App.prototype.start = function () {
     'use strict';

     let scenes = [];

     scenes.push(Boot);
     scenes.push(Preload);
     scenes.push(Menu)

     const config = {
          type: Phaser.AUTO,
          parent: 'app',
          width: WIDTH,
          height: HEIGHT,
          physics: {
               default: 'arcade',
               arcade: {
                    gravity: {
                         y: 0
                    }
               }
          },
          scene: scenes,
          pixelArt: true,
          fps: {
               target: 30
          },
          backgroundColor: '0xF4CCA1'
     };

     let game = new Phaser.Game(config);

     game.IS_DEV = this.IS_DEV;
     game.VERSION = this.VERSION;

     game.CONFIG = {
          width: config.width,
          height: config.height,
          centerX: Math.round(0.5 * config.width),
          centerY: Math.round(0.5 * config.height),
          tile: 32
     }
     game.URL = "../"

     game.sound_on = true;
}

