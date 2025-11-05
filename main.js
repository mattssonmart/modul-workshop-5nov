import { convertHeight } from './height.js';

const convertHeightBtn = document.getElementById('convertHeightBtn');
const heightInput = document.getElementById('heightInput');
const heightFrom = document.getElementById('heightFrom');
const heightTo = document.getElementById('heightTo');
const resultElement = document.getElementById('heightResult');

convertHeightBtn.addEventListener('click', () => {
    const value = parseFloat(heightInput.value);
    const from = heightFrom.value;
    const to = heightTo.value;
    const result = convertHeight(value, from, to);
    resultElement.textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
});
