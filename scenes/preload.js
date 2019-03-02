class Preload extends Phaser.Scene {
     constructor() {
          super({ key: 'Preload', active: false })
     }

     init() {
          this.URL = this.sys.game.URL;
          this.CONFIG = this.sys.game.CONFIG;
     }

     preload() {
          this.createLoadingBar();

          this.load.setPath(this.URL + 'assets/img');

          this.load.spritesheet('nyancat', 'nyancat_spritesheet.png', {
               frameWidth: 500,
               frameHeight: 198
          });
          this.load.image('sky', 'sky.png');
          this.load.image('earth', ['planet.png', 'earth_n.png']);
          this.load.image('city', 'city.png');
          this.load.image('sun', 'sun.png');
          this.load.audio('music', 'Sound/music.mp3');
          this.load.audio('break_heart', 'Sound/damage.mp3');
          this.load.audio('powerup_planet', 'Sound/powerup_planet.mp3');
          this.load.audio('game_over', 'Sound/game_over.mp3');
          this.load.spritesheet('ray', 'light.png', {
               frameWidth: 24,
               frameHeight: 24
          });
          this.load.image('rock', 'rock.png');
          this.load.spritesheet('player',
               'player.png', {
                    frameWidth: 50,
                    frameHeight: 100
               });
          this.load.spritesheet('enemy',
               'enemy.png', {
                    frameWidth: 199,
                    frameHeight: 200,
               });
          this.load.image('hand', 'hand.png')
          this.load.image('cloud', 'cloud.png');
          this.load.image('star', 'light.png');
          this.load.spritesheet('etplanet',
               'moonsprite.png', {
                    frameWidth: 435,
                    frameHeight: 435
               });
          this.load.spritesheet('heart',
               'hearts.png', {
                    frameWidth: 40,
                    frameHeight: 80
               });
          this.load.atlas('flares', 'flares.png', 'flares.json');
          this.load.image('button_left', 'button_left.png');
          this.load.image('button_right', 'button_right.png');

     }

     create() {
          this.scene.start('Menu');
     }

     createLoadingBar() {
          this.title = new Text(
               this,
               this.CONFIG.centerX,
               75,
               'Loading Game',
               'preload',
               0.5);

          this.txt_progress = new Text(
               this,
               this.CONFIG.centerX,
               this.CONFIG.centerY - 5,
               'Loading...',
               'preload',
               {
                    x: 0.5,
                    y: 1
               }
          )

          let x = 10;
          let y = this.CONFIG.centerY + 5;
          let w = this.CONFIG.width - (2 * x);
          let h = 18;

          this.progress = this.add.graphics({ x: x, y: y });
          this.border = this.add.graphics({ x: x, y: y });



          this.load.on('progress', this.onProgress, this);
     }

     onProgress(value) {

          let w = this.CONFIG.width - (2 * this.progress.x);
          let h = 18;
          this.progress.clear();
          this.progress.fillStyle('0xffffff', 1);
          this.progress.fillRect(0, 0, w * value, h);

          this.border.clear();
          this.border.lineStyle(2, '0x4d6592', 1);
          this.border.strokeRect(0, 0, w * value, h);

          this.txt_progress.setText(Math.round(value * 100) + '%');

          console.log(this.txt_progress.text);
     }
}