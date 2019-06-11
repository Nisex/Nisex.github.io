class Game extends Phaser.Scene {
     constructor() {
          super({ key: 'Game', active: false })
     }

     init() {
          this.URL = this.sys.game.URL;
          this.CONFIG = this.sys.game.CONFIG;

          this.information = 0;
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
     
     typeInformation(){
          
          this.playbutton = this.add.graphics({ x: 0, y: this.CONFIG.centerY * 2 - this.CONFIG.centerY / 3 });
          this.playbutton.clear();
          this.playbutton.fillStyle('0xd5c1a3', 1);
          this.playbutton.width = this.CONFIG.width;
          this.playbutton.height = this.CONFIG.height/4;
          this.playbutton.fillRect(0, 0, this.playbutton.width, this.playbutton.height);
          console.log(this.information);
          this.informationText = new Text(this, 
               5, 
              this.CONFIG.centerY * 2 - this.CONFIG.centerY / 3 + 10, 
              "", 
              "button", 16,0);
         this.buttonText = new Text(this,
              this.CONFIG.width - 90,
              this.CONFIG.centerY * 2 - this.CONFIG.centerY / 3 + 90,
              '',
              'button', 14,
              0.5);
          this.typeText();

     }

     typeText(){
          switch(this.information){
               case 0:
                    this.buttonText.setText('Click anywhere to continue...');
                    this.informationText.setText("Welcome to my curriculum.\nMy name is Ruben Santos and I'm a young developer\nfrom Portugal.");

                    this.input.on('pointerup', function () {
                         this.informationText.setText("");
                         this.information++;
                         this.typeText();
                    }, this);
                    break;
               case 1:
                    this.informationText.setText("I have aptitude for a lot of things from my \neducation at ISEP and Colégio de Gaia which\ngave me enough technical skill in various areas");
                    break;
               case 2:
                    this.informationText.setText("Such as C#, Javascript, Prolog, and others!\nI'm an enthusiast, adaptable and autonomous \ndeveloper. Who is also studying software \nengineering.");
                    break;
               case 3:
                    this.informationText.setText("I believe myself to be constantly looking to learn\nand even if I do have a certain stubborness\nI love working in teams and producing great things!");
                    break;
               case 4:
                    this.informationText.setText("While I do like programming, graphics and artificial\nintelligence is what I really like but I won't\nrun away from a challenge!");
                    break;
               case 5:
                    this.informationText.setText("Would you like to know more? Give me a call or\nsend me an email! I'll be waiting.");
                    break;
               default:
                    this.informationText.setText("");
                    this.buttonText.setText("");
                    this.playbutton.width = 0;
                    this.playbutton.height = 0;
                    this.playbutton.clear();
                    this.gameon = true;
          }
     }

     update() {
          if (this.distance < this.CONFIG.centerX) {
               this.distance++;
               this.centerPlanet.moveToX(this.distance);
          } else if (this.distance == this.CONFIG.centerX) {
               // Game start logic, break the vicious if cycle.
               this.typeInformation();
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