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
          this.cursors = this.input.keyboard.createCursorKeys();
     }

     update() {
          if (this.distance < this.CONFIG.centerX) {
               this.distance++;
               this.centerPlanet.moveToX(this.distance);
          } else if (this.distance == this.CONFIG.centerX) {
               // Game start logic, break the vicious if cycle.
               this.gameon = true;
               this.distance++;

               // Player
               this.player = new Player(this, this.centerPlanet.x(), this.centerPlanet.y() - this.centerPlanet.getRadius(), 'player');
               this.player.setRadius(this.centerPlanet.getRadius() + this.player.entity.height / 2);

          }
          if (this.gameon) {
               // Game start

               // Movement checking.
               if (this.cursors.right.isDown) {
                    this.player.moveRight(this.centerPlanet);
               } else if (this.cursors.left.isDown) {
                    this.player.moveLeft(this.centerPlanet);
               } else {
                    this.player.idle();
               }



          }
     }

}