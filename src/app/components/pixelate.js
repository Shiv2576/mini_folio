"use strict";

export default class Pixelate {
  constructor(el, obj) {
    // 1. Added 100 to the end of steps for crystal clear finish
    this.steps = obj?.steps || [0.5, 1, 2, 4, 8, 16, 32, 64, 80, 100];
    this.duration = obj?.timeBetweenSteps || 100;
    this.imagePaths = obj?.images || ["/image1.jpg", "/image2.jpg"];

    this.pixelIndex = 0;
    this.currentImgIndex = 0;
    this.canvasImages = [];
    this.isAnimationActive = false;
    this.timeout = null;

    this.effectWrap = el;
    this.originalImg = el.querySelector("img");
    this.canvas = null;
    this.ctx = null;
    this.imgRatio = 1;

    this.init();
  }

  async init() {
    const canvasWrap = document.createElement("div");
    canvasWrap.classList.add("canvas-wrap");
    this.effectWrap.appendChild(canvasWrap);

    this.canvas = document.createElement("canvas");
    this.canvas.style.position = "absolute";
    this.canvas.style.inset = "0";
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    canvasWrap.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    const loadPromises = this.imagePaths.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
      });
    });

    this.canvasImages = await Promise.all(loadPromises);
    this.imgRatio = this.canvasImages[0].width / this.canvasImages[0].height;
    this.setCanvasSize();

    if (this.originalImg) this.originalImg.style.opacity = 0;

    this.loop();
  }

  setCanvasSize() {
    // Handle High DPI displays for extra sharpness
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.effectWrap.offsetWidth * dpr;
    this.canvas.height = this.effectWrap.offsetHeight * dpr;
    this.ctx.scale(dpr, dpr);
  }

  drawImage(img) {
    const width = this.effectWrap.offsetWidth;
    const height = this.effectWrap.offsetHeight;
    let pxFactor = this.steps[this.pixelIndex];
    let size = pxFactor * 0.01;

    this.ctx.imageSmoothingEnabled = false;

    // Clear canvas before drawing
    this.ctx.clearRect(0, 0, width, height);

    // If we are at 100%, draw the image normally for maximum sharpness
    if (size >= 1) {
      this.ctx.imageSmoothingEnabled = true; // Re-enable smoothing for the final clear frame
      this.ctx.drawImage(img, 0, 0, width, height);
    } else {
      // Draw tiny version
      this.ctx.drawImage(img, 0, 0, width * size, height * size);
      // Scale it back up
      this.ctx.drawImage(
        this.canvas,
        0,
        0,
        width * size,
        height * size,
        0,
        0,
        width,
        height,
      );
    }
  }

  animatePixels(img) {
    return new Promise((resolve) => {
      const step = () => {
        if (this.pixelIndex < this.steps.length) {
          this.drawImage(img);
          this.pixelIndex++;
          this.timeout = setTimeout(step, this.duration);
        } else {
          // 2. Changed to 5000ms (5 seconds) for the loop pause
          setTimeout(() => {
            this.pixelIndex = 0;
            resolve();
          }, 10000);
        }
      };
      step();
    });
  }

  async loop() {
    const img = this.canvasImages[this.currentImgIndex];
    await this.animatePixels(img);

    this.currentImgIndex =
      (this.currentImgIndex + 1) % this.canvasImages.length;
    this.loop();
  }
}
