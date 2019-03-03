class Player {
     constructor(ctx, x, y, sprite) {
          this.ctx = ctx;
          this.x = x;
          this.y = y;
          this.sprite = sprite;
          this.rotation_step = Math.PI / 256;
          this.angle = this.rotation_step * -130;
          this.createPlayer();
     }

     createPlayer() {
          this.entity = this.ctx.physics.add.sprite(this.x, this.y, this.sprite);
          this.entity.height *= 0.45;
          this.entity.width *= 0.45;
          this.entity.scaleX = 0.45;
          this.entity.scaleY = 0.45;
          this.entity.y -= this.entity.height / 2;

          this.ctx.anims.create({
               key: 'left',
               frames: this.ctx.anims.generateFrameNumbers(this.sprite, {
                    start: 0,
                    end: 3
               }),
               frameRate: 10,
               repeat: -1
          });
          this.ctx.anims.create({
               key: 'turn',
               frames: [{
                    key: this.sprite,
                    frame: 4
               }],
               frameRate: 20
          });
          this.ctx.anims.create({
               key: 'right',
               frames: this.ctx.anims.generateFrameNumbers(this.sprite, {
                    start: 5,
                    end: 8
               }),
               frameRate: 10,
               repeat: -1
          });
     }

     setRadius(rad) {
          this.radius = rad;
     }

     moveRight(earth) {
          this.entity.x = earth.x() + Math.cos(this.angle) * this.radius;
          this.entity.y = earth.y() + Math.sin(this.angle) * this.radius;
          this.angle += this.rotation_step;
          this.entity.rotation += this.rotation_step;
          this.entity.anims.play('right', true);
     }

     idle() {
          this.entity.anims.play('turn', true);
     }

     moveLeft(earth) {
          this.entity.x = earth.x() + Math.cos(this.angle) * this.radius;
          this.entity.y = earth.y() + Math.sin(this.angle) * this.radius;
          this.angle -= this.rotation_step;
          this.entity.rotation -= this.rotation_step;
          this.entity.anims.play('left', true);
     }

}