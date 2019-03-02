class Game extends Phaser.Scene {
     constructor() {
          super({ key: 'Game', active: false })
     }

     init() {
          this.URL = this.sys.game.URL;
          this.CONFIG = this.sys.game.CONFIG;
     }

     preload() {
     }

     create() {
          this.sky = this.add.image(this.CONFIG.centerX, this.CONFIG.centerY, 'sky');
          this.sky.setDisplaySize(this.CONFIG.width, this.CONFIG.height);
          this.distance = 0;
          this.centerPlanet = new CenterPlanet(this, 'earth', 'city');
     }

     update() {
          if (this.distance < this.CONFIG.width + this.centerPlanet.planet.width) {
               this.distance++;
          }
          this.centerPlanet.moveToX(0 + this.distance);
     }

}