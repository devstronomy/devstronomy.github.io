import { fill, stroke } from "./canvas.js";
import { getPlanets } from "./planets.js";
import { circle } from "./shapes.js";
import C from "./config.js";

class SolarSystem {
  constructor() {
    // TODO: hide outer planets until having a meaningful way to display them. E.g., zooming.
    this.planets = getPlanets().slice(0, 4);
    this.startMs = Date.now();
  }

  drawSun(ctx) {
    const sunRadiusKm = 695700;
    circle(ctx, 0, 0, sunRadiusKm * C.sun.radiusScalingFactor);
    fill(ctx, "yellow");
    stroke(ctx, "orange");
  }

  render({ ctx }) {
    this.drawSun(ctx);
    this.planets.forEach((p) => {
      p.update((Date.now() - this.startMs) / 1000);
      p.draw(ctx);
    });
  }
}

export default SolarSystem;
