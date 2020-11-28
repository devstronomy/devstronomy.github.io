import { clear } from "./canvas.js";
import SolarSystem from "./solarSytem.js";

const FPS = 60;

function startSimulation() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const canvasInfo = {
    canvas,
    ctx,
    width: undefined,
    height: undefined,
  };

  const resizeCanvas = () => {
    // Lookup the size the browser is displaying the canvas.
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      // Make the canvas the same size
      canvas.width = displayWidth;
      canvas.height = displayHeight;
      canvasInfo.width = displayWidth;
      canvasInfo.height = displayHeight;
    }
  };

  const solarSystem = new SolarSystem();

  function mainLoop() {
    resizeCanvas();
    clear(canvasInfo);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    solarSystem.render(canvasInfo);
    ctx.restore();
  }

  setInterval(() => {
    requestAnimationFrame(() => {
      mainLoop();
    });
  }, 1000 / FPS);
}

window.onload = startSimulation;
