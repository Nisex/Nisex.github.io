class CenterPlanet {
     constructor(ctx, planet, background) {
          this.ctx = ctx;
          this.CONFIG = ctx.CONFIG;

          this.createCenterPlanet(planet, background);
     }

     createCenterPlanet(planet, background) {
          this.planetBackground = this.ctx.add.image(this.CONFIG.centerX, this.CONFIG.centerY, background);
          this.planetBackground.scaleX = 0.31;
          this.planetBackground.scaleY = 0.31;
          this.planetBackground.x -= 4;
          this.planetBackground.y += 1;

          this.planet = this.ctx.add.image(this.CONFIG.centerX, this.CONFIG.centerY, planet);
          this.planet.scaleX = 0.24;
          this.planet.scaleY = 0.24;
     }

     moveToX(x) {
          this.planetBackground.x = x;
          this.planetBackground.x -= 4;
          this.planet.x = x;
     }
}