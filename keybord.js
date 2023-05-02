/* import data from "./data/keys.js"; */
const data = [
  [
    {
      key: "`~",
      keyRus: "ё",
      keyCode: 192,
      code: "Backquote",
    },
    {
      key: "1!",
      keyCode: 49,
      code: "Digit1",
    },
    {
      key: "2@",
      keyRus: '2"',
      keyCode: 50,
      code: "Digit2",
    },
    {
      key: "3#",
      keyRus: "3№",
      keyCode: 51,
      code: "Digit3",
    },
    {
      key: "4$",
      keyRus: "4;",
      keyCode: 52,
      code: "Digit4",
    },
    {
      key: "5%",
      keyCode: 53,
      code: "Digit5",
    },
    {
      key: "6^",
      keyRus: "6:",
      keyCode: 54,
      code: "Digit6",
    },
    {
      key: "7&",
      keyCode: 55,
      keyRus: "7?",
      code: "Digit7",
    },
    {
      key: "8*",
      keyCode: 56,
      code: "Digit8",
    },
    {
      key: "9(",
      keyCode: 57,
      code: "Digit9",
    },
    {
      key: "0)",
      keyCode: 48,
      code: "Digit0",
    },
    {
      key: "-_",
      keyCode: 189,
      code: "Minus",
    },
    {
      key: "=+",
      keyCode: 187,
      code: "Equal",
    },
    {
      key: "backspace",
      keyCode: 8,
      code: "Backspace",
      size: "calc(35px/.339)",
    },
  ],
  [
    {
      key: "Tab",
      keyCode: 9,
      code: "Tab",
      size: "calc(35px/.5)",
    },
    {
      key: "q",
      keyRus: "й",
      keyCode: 81,
      code: "KeyQ",
    },
    {
      key: "w",
      keyRus: "ц",
      keyCode: 87,
      code: "KeyW",
    },
    {
      key: "e",
      keyRus: "у",
      keyCode: 69,
      code: "KeyE",
    },
    {
      key: "r",
      keyRus: "к",
      keyCode: 82,
      code: "KeyR",
    },
    {
      key: "t",
      keyRus: "е",
      keyCode: 84,
      code: "KeyT",
    },
    {
      key: "y",
      keyRus: "н",
      keyCode: 89,
      code: "KeyY",
    },
    {
      key: "u",
      keyRus: "г",
      keyCode: 85,
      code: "KeyU",
    },
    {
      key: "i",
      keyRus: "ш",
      keyCode: 73,
      code: "KeyI",
    },
    {
      key: "o",
      keyRus: "щ",
      keyCode: 79,
      code: "KeyO",
    },
    {
      key: "p",
      keyRus: "з",
      keyCode: 80,
      code: "KeyP",
    },
    {
      key: "[",
      keyRus: "х",
      keyCode: 219,
      code: "BracketLeft",
    },
    {
      key: "]",
      keyRus: "ъ",
      keyCode: 221,
      code: "BracketRight",
    },
    {
      key: "\\/",
      keyCode: 220,
      code: "Backslash",
      size: "calc(35px/.5)",
    },
    {
      key: "del",
      keyCode: 46,
      code: "Delete",
    },
  ],
  [
    {
      key: "Caps Lock",
      keyCode: 20,
      code: "Caps Lock",
      size: "calc(35px/.4)",
    },
    {
      key: "a",
      keyRus: "ф",
      keyCode: 65,
      code: "KeyA",
    },
    {
      key: "s",
      keyRus: "ы",
      keyCode: 83,
      code: "KeyS",
    },
    {
      key: "d",
      keyRus: "в",
      keyCode: 68,
      code: "KeyD",
    },
    {
      key: "f",
      keyRus: "а",
      keyCode: 70,
      code: "KeyF",
    },
    {
      key: "g",
      keyRus: "п",
      keyCode: 71,
      code: "KeyG",
    },
    {
      key: "h",
      keyRus: "р",
      keyCode: 72,
      code: "KeyH",
    },
    {
      key: "j",
      keyRus: "о",
      keyCode: 74,
      code: "KeyJ",
    },
    {
      key: "k",
      keyRus: "л",
      keyCode: 75,
      code: "KeyK",
    },
    {
      key: "l",
      keyRus: "д",
      keyCode: 76,
      code: "KeyL",
    },
    {
      key: ";:",
      keyRus: "ж",
      keyCode: 186,
      code: "Semicolon",
    },
    {
      key: "'\"",
      keyRus: "э",
      keyCode: 222,
      code: "Quote",
    },
    {
      key: "Enter",
      keyCode: 13,
      code: "Enter",
      size: "calc(35px/.35)",
    },
  ],
  [
    {
      key: "Shift",
      keyCode: 16,
      code: "ShiftLeft",
      size: "calc(35px/.3)",
    },
    {
      key: "/",
      keyCode: 191,
      code: "Slash",
    },
    {
      key: "z",
      keyRus: "я",
      keyCode: 90,
      code: "KeyZ",
    },
    {
      key: "x",
      keyRus: "ч",
      keyCode: 88,
      code: "KeyX",
    },
    {
      key: "c",
      keyRus: "с",
      keyCode: 67,
      code: "KeyC",
    },
    {
      key: "v",
      keyRus: "м",
      keyCode: 86,
      code: "KeyV",
    },
    {
      key: "b",
      keyRus: "и",
      keyCode: 66,
      code: "KeyB",
    },
    {
      key: "n",
      keyRus: "т",
      keyCode: 78,
      code: "KeyN",
    },
    {
      key: "m",
      keyRus: "ь",
      keyCode: 77,
      code: "KeyM",
    },
    {
      key: ",<",
      keyRus: "б",
      keyCode: 188,
      code: "Comma",
    },
    {
      key: ".>",
      keyRus: "ю",
      keyCode: 190,
      code: "Period",
    },
    {
      key: "/?",
      keyRus: ".,",
      keyCode: 191,
      code: "Slash",
    },
    {
      key: "&#5123",
      keyCode: 38,
      code: "ArrowUp",
    },
    {
      key: "Shift",
      keyCode: 16,
      code: "ShiftRight",
    },
  ],
  [
    {
      key: "Ctrl",
      keyCode: 17,
      code: "ControlLeft",
      size: "50px",
    },
    {
      key: "Win",
      keyCode: 91,
      code: "MetaLeft",
    },
    {
      key: "Alt",
      keyCode: 18,
      code: "AltLeft",
      size: "50px",
    },
    {
      key: " ",
      keyCode: 32,
      code: "Space",
      size: "282px",
    },
    {
      key: "Alt",
      keyCode: 18,
      code: "AltRight",
      size: "50px",
    },
    {
      key: "Ctrl",
      keyCode: 17,
      code: "ControlRight",
      size: "50px",
    },
    {
      key: "&#5130",
      keyCode: 37,
      code: "ArrowLeft",
    },
    {
      key: "&#5121",
      keyCode: 40,
      code: "ArrowDown",
    },
    {
      key: "&#5125",
      keyCode: 39,
      code: "ArrowRight",
    },
  ],
];
let positionCursor;
const body = document.body;
const functionalityKey = {
  backspace: function (textArea) {
    positionCursor = textArea.selectionStart;
    let txField = textArea.value.split("");
    txField.splice(textArea.selectionStart - 1, 1);
    textArea.value = txField.join("");
    textArea.focus();
    textArea.selectionStart = positionCursor - 1;
    textArea.selectionEnd = positionCursor - 1;
  },
  del: function (textArea) {
    positionCursor = textArea.selectionStart;
    let txField = textArea.value.split("");
    txField.splice(textArea.selectionStart, 1);
    textArea.value = txField.join("");
    textArea.focus();
    textArea.selectionStart = positionCursor;
    textArea.selectionEnd = positionCursor;
  },

  enter: function () {
    fieldText.value += "\n";
    textArea.focus();
  },
  "caps lock": function () {
    LockState ? (LockState = false) : (LockState = true);
    document
      .querySelector(`.key[data-key-code="20"]`)
      .classList.toggle("green__key");
    textArea.focus();
  },
  "Caps Lock": function () {
    LockState ? (LockState = false) : (LockState = true);
    document
      .querySelector(`.key[data-key-code="20"]`)
      .classList.toggle("green__key");
    textArea.focus();
  },
  tab: function () {
    textArea.focus();
    fieldText.value += "\t";
    textArea.selectionStart += 1;
    textArea.focus();
  },
  Tab: function () {
    textArea.focus();
    textArea.selectionStart += 1;
    fieldText.value += "\t";
    textArea.focus();
  },
  Control: function (event) {
    textArea.focus();
    event.shiftKey ? changeLanguage() : false;
    textArea.focus();
  },
  Shift: function (event) {
    event.ctrlKey ? changeLanguage() : false;
    textArea.focus();
  },
};
let curenLanguage = "";
function createKeyboard(type) {
  if (localStorage.getItem("lang")) {
    type = localStorage.getItem("lang");
  } else {
    localStorage.setItem("lang", "key");
  }
  curenLanguage = type;
  let keyboard = `<div class="container">
    <textarea id="field-for-text" class="text"></textarea>
    <div id="keyboard" class="keyboard">`;
  for (let i = 0; i < data.length; i++) {
    keyboard += `<div class="keyboard__row">`;
    for (let j = 0; j < data[i].length; j++) {
      keyboard += `<div class="key" data-key-code="${data[i][j].keyCode}">`;
      let curType = type; /*для проверки если не русс символа */
      if (!data[i][j][type]) {
        curType = "key";
      }
      if (data[i][j][curType].length === 2) {
        keyboard += `<span>${data[i][j][curType][1]}</span><span>${data[i][j][curType][0]}</span>`;
      } else {
        keyboard += `<span>${data[i][j][curType]}</span>`;
      }
      keyboard += `</div>`;
    }
    keyboard += `</div>`;
  }
  keyboard += `</div><div style = "color: red; text-align: center; ">Смена языка CTRL + SHIFT</div>`;
  body.innerHTML = keyboard;
}

createKeyboard("key"); /**создаю клавиатуру в дом */
const keyboardDom = document.querySelector(".keyboard");
const fieldText = document.getElementById("field-for-text");

function clickButton(e) {
  if (e.type !== "keydown") {
    /*    if (e.target.innerText.length > 2) {
      return false;
    } */
    if (
      e.target.parentElement.className == "key" ||
      e.target.parentElement.className == "key green__key"
    ) {
      if (functionalityKey[e.target.innerText.toLowerCase()]) {
        functionalityKey[e.target.innerText.toLowerCase()](textArea);
      } else {
        if (e.target.innerText.length < 2) {
          LockState
            ? (fieldText.value +=
                e.target.parentElement.lastChild.innerHTML.toUpperCase())
            : (fieldText.value += e.target.parentElement.lastChild.innerHTML);
        }
      }
    } else if (
      e.target.className == "key" ||
      e.target.className == "key green__key"
    ) {
      if (functionalityKey[e.target.innerText.toLowerCase()]) {
        functionalityKey[e.target.innerText.toLowerCase()](textArea);
      } else {
        if (e.target.firstChild.innerText.length < 2) {
          LockState
            ? (fieldText.value += e.target.lastChild.innerHTML.toUpperCase())
            : (fieldText.value += e.target.lastChild.innerHTML);
        }
      }
    }
  } else {
    if (e.key.length < 2) {
      LockState
        ? (fieldText.value += e.key.toUpperCase())
        : (fieldText.value += e.key);
    }
  }
  /*  textArea.focus(); */
}
document.addEventListener("keydown", clickButtonOnKeyboard);

function removeStyleDownButton(e) {
  let curEl = document.querySelector(`.key[data-key-code="${e.keyCode}"]`);
  if (curEl) {
    document
      .querySelector(`.key[data-key-code="${e.keyCode}"]`)
      .classList.remove("active");
  }
}
function clickButtonOnKeyboard(e) {
  console.log(e);
  textArea.blur();
  let curEl = document.querySelector(`.key[data-key-code="${e.keyCode}"]`);
  if (!functionalityKey[curEl.firstChild.innerText.toLowerCase()]) {
    functionalityKey[e.key] ? functionalityKey[e.key](e) : false;
    if (curEl) {
      curEl.classList.add("active");
      clickButton(e);
      document.addEventListener("keyup", removeStyleDownButton);
    }
  } else {
    textArea.focus();
    functionalityKey[e.key] ? functionalityKey[e.key](e) : false;
    curEl.classList.add("active");
    document.addEventListener("keyup", removeStyleDownButton);
  }
}

const textArea = document.querySelector("textarea");

function backspace(textArea) {
  let txField = textArea.value.split("");
  txField.splice(textArea.selectionStart - 1, 1);
  textArea.value = txField.join("");
}
function del(textArea) {
  let txField = textArea.value.split("");
  txField.splice(textArea.selectionStart, 1);
  textArea.value = txField.join("");
}
function changeLanguage() {
  curenLanguage === "key"
    ? (curenLanguage = "keyRus")
    : (curenLanguage = "key");
  if (curenLanguage === "key") {
    type = "key";
  } else {
    type = "keyRus";
  }
  let keyboard = "";
  for (let i = 0; i < data.length; i++) {
    keyboard += `<div class="keyboard__row">`;
    for (let j = 0; j < data[i].length; j++) {
      keyboard += `<div class="key" data-key-code="${data[i][j].keyCode}">`;
      let curType = type; /*для проверки если не русс символа */
      if (!data[i][j][type]) {
        curType = "key";
      }
      if (data[i][j][curType].length === 2) {
        keyboard += `<span>${data[i][j][curType][1]}</span><span>${data[i][j][curType][0]}</span>`;
      } else {
        keyboard += `<span>${data[i][j][curType]}</span>`;
      }
      keyboard += `</div>`;
    }
    keyboard += `</div>`;
  }
  keyboard += `</div>`;
  keyboardDom.innerHTML = keyboard;
  localStorage.setItem("lang", type);
  console.log(localStorage.getItem("lang"));
}

window.onkeydown = (evt) => {
  if (evt.key == "Tab") {
    evt.preventDefault();
  }
};

function tab() {
  fieldText.value += "   ";
}
function enter() {
  fieldText.value += "\n";
}
let LockState = false;
function lockCaps() {
  LockState ? (LockState = false) : (LockState = true);
  document
    .querySelector(`.key[data-key-code="20"]`)
    .classList.toggle("green__key");
}

keyboardDom.addEventListener("click", clickButton);
