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

let arrKeysEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER'],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '⇧', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⇦', '⇩', '⇨'],
];

const arrKeysRu = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL'],
  ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '/', '⇧', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⇦', '⇩', '⇨'],
];

let arrKeys = arrKeysEn;
const [row1, row2, row3, row4, row5] = arrKeys;

row1.forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index === 0) key.className = 'key letter';
  if (index === 13) key.className = 'key backspace';
  key.innerText = item;
  line1.appendChild(key);
});

row2.forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index === 0) key.className = 'key tab';
  if (index >= 1 && index <= 12) key.className = 'key letter';
  if (index === 14) key.className = 'key del';
  key.innerText = item;
  line2.appendChild(key);
});

row3.forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index === 0) key.className = 'key caps';
  if (index >= 1 && index <= 11) key.className = 'key letter';
  if (index === 12) key.className = 'key enter';
  key.innerText = item;
  line3.appendChild(key);
});

row4.forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index === 0) key.className = 'key shift shift_left';
  if (index === 13) key.className = 'key shift shift_right';
  if (index >= 2 && index <= 9) key.className = 'key letter';
  if (index === 12) key.className = 'key arrow arrow_up';
  key.innerText = item;
  line4.appendChild(key);
});

row5.forEach((item, index) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (index === 0) key.className = 'key ctrl ctrl_left';
  if (index === 5) key.className = 'key ctrl ctrl_right';
  if (index === 2) key.className = 'key alt alt_left';
  if (index === 4) key.className = 'key alt alt_right';
  if (index === 1) key.className = 'key win';
  if (index === 3) key.className = 'key space';
  if (index === 6) key.className = 'key arrow arrow_left';
  if (index === 7) key.className = 'key arrow arrow_down';
  if (index === 8) key.className = 'key arrow arrow_right';
  key.innerText = item;
  line5.appendChild(key);
});

/* работа клавиш */

const keys = document.querySelectorAll('.key');
const letters = document.querySelectorAll('.letter');

const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/648');
let altPressed = false; // звук изначально отключен
function sound() {
  audio.play();
}

keys.forEach((key) => {
  key.addEventListener('click', function pressKey() {
    if (this.classList.contains('caps')) { // включение и выключение capslock
      this.classList.toggle('active');
      letters.forEach((item) => {
        item.classList.toggle('uppercase');
      });
    } else if (this.classList.contains('backspace')) { // работа Backspace
      const str = screen.innerText;
      screen.innerText = str.slice(0, str.length - 1);
    } else if (this.classList.contains('del')) { // работа DELETE
      const str = screen.innerText;
      screen.innerText = str.slice(0, str.length - 1);
    } else if (this.classList.contains('space')) { // работа пробела
      screen.innerText += ' ';
    } else if (this.classList.contains('tab')) { // работа tab
      screen.innerText += '    ';
    } else if (this.classList.contains('enter')) { // работа ENTER
      screen.innerText += '\n';
    } else if (this.classList.contains('shift')) { // работа shift
      screen.innerText += '';
    } else if (this.classList.contains('ctrl')) { // работа ctrl
      screen.innerText += '';
    } else if (this.classList.contains('win')) { // работа win
      screen.innerText += '';
    } else if (this.classList.contains('alt')) {
      if (!altPressed) {
        keys.forEach((item) => {
          item.addEventListener('click', sound);
        });
        altPressed = true;
      } else if (altPressed) {
        keys.forEach((item) => {
          item.removeEventListener('click', sound);
        });
        altPressed = false;
      }
    } else {
      screen.innerText += this.innerText;
    }
  });
});

/* нажатие  на компе подсвечивает виртуальную клавиатуру  */

document.onkeydown = function lightKey(event) {
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].innerText.toLowerCase() === event.key.toLowerCase()) { // подсвечивает при нажатии
      keys[i].classList.add('active');
    }
    if (event.code === 'Tab') {
      event.preventDefault();
    }

    if (keys[i].classList.contains('del') && event.code === 'Delete') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('caps') && event.code === 'CapsLock') {
      //  keys[i].classList.add('active');

      keys[i].classList.toggle('active');
      if (keys[i].classList.contains('active')) {
        letters.forEach((item) => {
          item.classList.toggle('uppercase');
        });
      }
    }
    if (keys[i].classList.contains('ctrl_left') && event.code === 'ControlLeft') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('ctrl_right') && event.code === 'ControlRight') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('win') && event.code === 'MetaLeft') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('shift_left') && event.code === 'ShiftLeft') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('shift_right') && event.code === 'ShiftRight') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('alt_left') && event.code === 'AltLeft') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('alt_right') && event.code === 'AltRight') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('space') && event.code === 'Space') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('arrow_up') && event.code === 'ArrowUp') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('arrow_left') && event.code === 'ArrowLeft') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('arrow_right') && event.code === 'ArrowRight') {
      keys[i].classList.add('active');
    }
    if (keys[i].classList.contains('arrow_down') && event.code === 'ArrowDown') {
      keys[i].classList.add('active');
    }
    if (event.ctrlKey && event.shiftKey) {
      arrKeysEn = arrKeysRu;
    }
  }
};

document.onkeyup = function upKeys() { // при отпускании клавиши подсветка гаснет
  keys.forEach((key) => {
    key.classList.remove('active');
  });
};

/* блок info */

const info = document.createElement('div');

info.className = 'info';
info.innerHTML = `<p>Клавиатура создана в операционной системе Windows </p>
    <p> Для переключения языка: левые ctrl + shift</p><p> Для включения/выключения звука: левый или правый alt</p>`;
body.appendChild(info);

/* ----------------change Language--------------------------*/
let isChanged = true;

function keyCombination(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) return;
    }
    pressed.clear();
    func();
    isChanged = !isChanged;
  });
}

function change() {
  arrKeys = (isChanged) ? arrKeysEn : arrKeysRu;
  line1.innerHTML = '';
  line2.innerHTML = '';
  line3.innerHTML = '';
  line4.innerHTML = '';

  const [rowRu1, rowRu2, rowRu3, rowRu4] = arrKeys;

  rowRu1.forEach((item, index) => {
    const key = document.createElement('div');
    key.className = 'key';
    if (index >= 0 && index <= 12) {
      key.innerText = item.toLowerCase();
      key.className = 'key letter_ru';
    }
    key.innerText = item;
    if (index === 13) key.className = 'key backspace_ru';
    line1.appendChild(key);
  });

  rowRu2.forEach((item, index) => {
    const key = document.createElement('div');
    key.className = 'key';
    if (index !== 0 && index !== 14) {
      key.innerText = item.toLowerCase();
    } else key.innerText = item;
    if (index === 0) key.className = 'key tab_ru';
    if (index >= 1 && index <= 12) key.className = 'key letter_ru';
    if (index === 14) key.className = 'key del_ru';
    line2.appendChild(key);
  });

  rowRu3.forEach((item, index) => {
    const key = document.createElement('div');
    key.className = 'key';
    if (index !== 0 && index !== 12) {
      key.innerText = item.toLowerCase();
    } else key.innerText = item;
    if (index === 0) key.className = 'key cap_ru';
    if (index >= 1 && index <= 11) key.className = 'key letter_ru';
    if (index === 12) key.className = 'key enter_ru';
    line3.appendChild(key);
  });

  rowRu4.forEach((item, index) => {
    const key = document.createElement('div');
    key.className = 'key';
    if (index !== 0 && index !== 12 && index !== 13) {
      key.innerText = item.toLowerCase();
    } else key.innerText = item;
    if (index === 0) key.className = 'key shift shift_left';
    if (index === 13) key.className = 'key shift shift_right';
    if (index >= 1 && index <= 12) key.className = 'key letter_ru';
    // if (index === 12) key.className = 'key arrow arrow_up';
    line4.appendChild(key);
  });

  const lettersRu = document.querySelectorAll('.letter_ru');
  const capRu = document.querySelector('.cap_ru');
  const backspaceRu = document.querySelector('.backspace_ru');
  const delRu = document.querySelector('.del_ru');
  const tabRu = document.querySelector('.tab_ru');
  const enterRu = document.querySelector('.enter_ru');

  lettersRu.forEach((item) => {
    item.addEventListener('click', function pressLetterRu() {
      screen.innerText += this.innerText;
    });
  });

  capRu.addEventListener('click', function pressCapRu() {
    this.classList.toggle('active');
    lettersRu.forEach((item) => {
      item.classList.toggle('uppercase');
    });
  });

  backspaceRu.addEventListener('click', () => {
    const str = screen.innerText;
    screen.innerText = str.slice(0, str.length - 1);
  });

  delRu.addEventListener('click', () => {
    const str = screen.innerText;
    screen.innerText = str.slice(0, str.length - 1);
  });

  tabRu.addEventListener('click', () => {
    screen.innerText += '    ';
  });

  enterRu.addEventListener('click', () => {
    screen.innerText += '\n';
  });

  document.onkeydown = function lightKeyRu(event) {
    for (let i = 0; i < keys.length; i += 1) {
      if (lettersRu[i].innerText.toLowerCase() === event.key.toLowerCase()) {
        lettersRu[i].classList.add('active');
      }
    }
  };

  document.onkeyup = function upKeysRu() { // при отпускании клавиши подсветка гаснет
    lettersRu.forEach((key) => {
      key.classList.remove('active');
    });
  };
}

keyCombination(change, 'ShiftLeft', 'ControlLeft');

/*------------------------------------------*/
