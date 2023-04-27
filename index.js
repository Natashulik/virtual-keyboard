/* add screen and keyboard */
const body = document.querySelector('body');
const screen = document.createElement('div');
const keyboard = document.createElement('div');

screen.className = 'screen';
keyboard.className = 'keyboard';

body.appendChild(screen);
body.appendChild(keyboard);

/* add lines */

const line1 = document.createElement('div');
line1.className = 'line line1';
keyboard.appendChild(line1);

const line2 = document.createElement('div');
line2.className = 'line line2';
keyboard.appendChild(line2);

const line3 = document.createElement('div');
line3.className = 'line line3';
keyboard.appendChild(line3);

const line4 = document.createElement('div');
line4.className = 'line line4';
keyboard.appendChild(line4);

const line5 = document.createElement('div');
line5.className = 'line line5';
keyboard.appendChild(line5);

/* add keys */
const arrKeys1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
arrKeys1.forEach((item) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.innerText = item;
  line1.appendChild(key);
})

const arrKeys2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', 'DEL'];
arrKeys2.forEach((item) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.innerText = item;
  line2.appendChild(key);
})

const arrKeys3 = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER'];
arrKeys3.forEach((item) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.innerText = item;
  line3.appendChild(key);
})

const arrKeys4 = ['Shift', '|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', 'up', 'Shift'];
arrKeys4.forEach((item) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.innerText = item;
  line4.appendChild(key);
})

const arrKeys5 = ['Ctrlt', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'left', 'down', 'right'];
arrKeys5.forEach((item) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.innerText = item;
  line5.appendChild(key);
})

document.addEventListener('keydown', (event) => {
  console.log(event.code);
});


screen.innerText="uabcf g iueb fygowiye  fbvo8wae ybfo8webf8wae bfv8aebgfp9aeb g9a7uegb0fp9 7gbaw e097vfbew09fgbv0pa7f"