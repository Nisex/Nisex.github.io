class Menu extends Phaser.Scene {
     constructor() {
          super({ key: 'Menu', active: false })
     }

     init() {
          this.URL = this.sys.game.URL;
          this.CONFIG = this.sys.game.CONFIG;
     }

     preload() {

     }

     create() {
          this.title = new Text(
               this,
               this.CONFIG.centerX,
               75,
               'LifeRay',
               'title',
               0.5);
     
          this.playbutton = this.add.graphics({x: this.CONFIG.centerX - 100, y: this.CONFIG.centerY + 50});
          this.playbutton.clear();
          this.playbutton.fillStyle('0xd5c1a3', 1);
          this.playbutton.width = 50;
          this.playbutton.height = 50;
          this.playbutton.fillRect(0, 0, this.playbutton.width, this.playbutton.height);
          

          this.buttonBorder = this.add.graphics({x: this.playbutton.x, y: this.playbutton.y});
          this.buttonBorder.clear();
          this.buttonBorder.lineStyle(2, '0x4d6592', 1);
          this.buttonBorder.strokeRect(0, 0, 50, 50);
     
          this.buttonText = new Text(this,
               this.buttonBorder.x + 25,
               this.buttonBorder.y + 25,
               'Play',
               'button',
               0.5);

          this.input.on('pointerup', function(pointer){
               let pointerx = pointer.x;
               let pointery = pointer.y;       
               
               if(this.checkButton(pointerx,pointery, this.playbutton)){
                    this.scene.start('game');
               }
          }, this);
     }

     checkButton(x,y, button){
          if((x <= button.x + button.width/2 || x >= button.x - button.width/2) && (y > button.y + button.height/2 || y < button.y - button.height/2)){
               return true;
          } else false;
     }

}