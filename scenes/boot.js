class Boot extends Phaser.Scene {
     constructor() {
          super({ key: 'Boot', active: true })
     }

     init() {
          this.URL = this.sys.game.URL;
     }

     preload() {
          this.load.setPath(this.URL + 'assets/fonts');

          this.load.bitmapFont('ClickPixel', 'click_0.png', 'click.xml')
     }

     create() {
          this.scene.start('Preload');
     }
}