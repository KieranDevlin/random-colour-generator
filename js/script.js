const randBtn = document.getElementById('randBtn');
const background = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

const getNewColor = () => {
  let newHexCode = '';
  const chars = '0123456789ABCDEF';
  const hexLength = 6;

  for (let i = 0; i < hexLength; i++) {
    let newHexChar = Math.floor(Math.random() * chars.length);
    newHexCode += chars.substring(newHexChar, newHexChar + 1);
  }

  return '#' + newHexCode;
};

randBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const audio = new Audio('./audio/ding.wav');
  const newDOMColor = getNewColor();

  hexCode.innerHTML = newDOMColor;
  background.setAttribute('style', 'background-color:' + newDOMColor);
  audio.play();
});
