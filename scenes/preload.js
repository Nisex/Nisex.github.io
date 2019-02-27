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

          this.load.spritesheet(
               'player',
               'player.png', {
                    frameWidth: 50,
                    frameHeight: 100
               }
          );

     }

     create() {

          //this.scene.start('Menu');
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

          this.load.on('progress', this.onProgress, this);
     }

     onProgress(value) {
          this.txt_progress.setText(Math.round(value * 100) + '%');

          console.log(this.txt_progress.text);
     }
}