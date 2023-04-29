/* add screen and keyboard */
const body = document.querySelector('body');
const screen = document.createElement('div');
const keyboard = document.createElement('div');


screen.className = 'screen';
screen.contentEditable = true;


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
const arrKeys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER'],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '⇧', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⇦', '⇩', '⇨']
]

arrKeys[0].forEach((item) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.innerText = item;
  line1.appendChild(key);
});

arrKeys[1].forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index >= 1 && index <= 10) {
    key.className = 'key letter';
  }
  key.innerText = item;
  line2.appendChild(key);
});

arrKeys[2].forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index >= 1 && index <= 9) {
    key.className = 'key letter';
  }
  key.innerText = item;
  line3.appendChild(key);
});

arrKeys[3].forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index >= 2 && index <= 8) {
    key.className = 'key letter';
  }
  key.innerText = item;
  line4.appendChild(key);
});

arrKeys[4].forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index === 2) { key.className = 'key alt_left'; }
  if (index === 3) { key.className = 'key space'; }
  key.innerText = item;
  line5.appendChild(key);
});

/* make capslock */

const keys = document.querySelectorAll('.key');
const letters = document.querySelectorAll('.letter');

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/648");
let altPressed = false;  //звук изначально отключен
let sound = function() {
  audio.play();
};

keys.forEach((key) => {
  key.addEventListener('click', function pressKey() {
    if (this.innerText === 'Caps Lock') { // включение и выключение capslock
      this.classList.toggle('active');
      letters.forEach((item) => {
        item.classList.toggle('uppercase');
      });
    } else if (this.innerText === 'Backspace') { // работа Backspace
      const str = screen.innerText;
      screen.innerText = str.slice(0, str.length - 1);
    }
    else if (this.innerText === 'DEL') { // работа DELETE
      const str = screen.innerText;
      screen.innerText = str.slice(0, -1);
    }
    else if (this.className === 'key space') { // работа пробела
      screen.innerText += ' ';
    }
    else if (this.className === 'key alt_left') {
      if(!altPressed) {
        keys.forEach(key => {
          key.addEventListener("click", sound);
        });
        altPressed = true;
      } else if(altPressed){
        keys.forEach(key => {
          key.removeEventListener("click", sound);
        });
        altPressed = false;
      }
    }
    
    else {
      screen.innerText += this.innerText;
    }
  });
});





