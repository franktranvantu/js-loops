let html = '';

const randomValue = () => Math.floor(Math.random() * 256);

const randomRGB = (value) => `rgb( ${value()}, ${value()}, ${value()} )`;

for (let i = 1; i <= 10; i++) {
  html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;