class Text {
     constructor(ctx, x, y, string, style, origin) {
          this.ctx = ctx;

          this.x = x;
          this.y = y;

          this.text = string;

          this.style = this.initStyle(style);
          this.origin = this.initOrigin(origin);

          this.obj = this.createText();
     }

     initStyle(key) {
          let style = {
               fontFamily: 'ClickPixel',
               fontSize: 16,
               color: '0xFFFFFF',
               align: 'center'
          }

          switch (key.toLowerCase()) {
               case 'title':
                    style.fontSize = 32;
                    break;
               case 'preload':
                    style.fontSize = 24;
                    break;
          }

          return style;
     }

     initOrigin(origin) {
          if (typeof origin === 'number') {
               return {
                    x: origin,
                    y: origin
               };
          }
          else if (typeof origin === 'object') {
               return origin;
          } else {
               return {
                    x: 0.5,
                    y: 0.5
               }
          }

     }

     createText() {
          var obj = this.ctx.add.bitmapText(
               this.x,
               this.y,
               this.style.fontFamily,
               this.text,
               this.style.fontSize,
               this.style.align
          );

          obj.setOrigin(this.origin.x, this.origin.y);
          return obj;
     }

     setText(text) {
          this.text = text;
          this.obj.setText(text);
     }
     setX(x) {
          this.x = x;
          this.obj.setX(x);
     }

     setY(y) {
          this.y = y;
          this.obj.setY(y);
     }

     destroy() {
          this.obj.destroy();
          this.obj = false;
     }
}