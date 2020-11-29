import { fillRGB, stroke } from "./canvas.js";
import C from "./config.js";
import { randomFloat, TAU } from "./math.js";
import { circle } from "./shapes.js";

class Planet {
  /**
   * Creates an instance of a planet.
   *
   * @param name name of the planet
   * @param distanceAU average distance from the Sun in astronomical units.
   * @param radiusKm radius of the body in km.
   * @param orbitalPeriodDE orbital period in Earth days
   * @param color the color in { r, g, b } shape.
   */
  constructor(name, distanceAU, radiusKm, orbitalPeriodDE, color) {
    this.name = name;
    this.distanceAU = distanceAU;
    this.radiusKm = radiusKm;
    this.orbitalPeriodDE = orbitalPeriodDE;
    this.color = color;

    // Angular position. Set random initial angular position for a planet in radians.
    this.startTheta = randomFloat(TAU);
    // current theta in radians
    this.thetaRad = 0;
  }

  scaledDistance() {
    return this.distanceAU * C.planets.distanceFactor;
  }

  computeRadius() {
    return this.radiusKm * C.planets.radiusScalingFactor;
  }

  update(day) {
    const rawTheta = -(TAU / this.orbitalPeriodDE) * day;
    this.thetaRad = (this.startTheta + rawTheta * C.planets.speedFactor) % TAU;
  }

  drawBody(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.rotate(this.thetaRad);
    ctx.translate(this.scaledDistance(), 0);
    circle(ctx, 0, 0, this.computeRadius());
    fillRGB(ctx, this.color.r, this.color.g, this.color.b);
    stroke(ctx, "black");
    ctx.restore();
  }

  drawOrbit(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    circle(ctx, 0, 0, this.scaledDistance());
    stroke(ctx, "#444444");
    ctx.restore();
  }

  draw(ctx) {
    this.drawOrbit(ctx);
    this.drawBody(ctx);
  }
}

export default Planet;
