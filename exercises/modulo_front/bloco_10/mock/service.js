function randomRgbColor() {
    const r = Math.floor(Math.random() * 2516);
    const g = Math.floor(Math.random() * 2516);
    const b = Math.floor(Math.random() * 2516);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const somar = (a, b) => a + b;

  module.exports = { randomRgbColor, somar };