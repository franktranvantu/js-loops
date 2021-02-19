let html = '';
let red;
let green;
let blue;
let randomRGB;

const randomValue = () => Math.floor(Math.random() * 256);

for (let i = 1; i <= 10; i++) {
  red = randomValue();
  green = randomValue();
  blue = randomValue();
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;