/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 
1 параметр amount - число. Функция создает столько div, 
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире 
и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const input = document.querySelector("#controls input");
const createBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const divBox = document.querySelector("#boxes");

let quantity = 0;

input.addEventListener("input", () => {
  quantity = input.value;
});

let markupString = "";

function makeDivMarkup() {
  for (let i = 0; i < quantity; i += 1) {
    markupString += `<div></div>`;
  }
  return markupString;
}

createBtn.addEventListener("click", toCreateCollection);
function toCreateCollection() {
  makeDivMarkup();
  divBox.insertAdjacentHTML("afterbegin", markupString);
  input.value = "";
  markupString = "";
  makeDivesStyles();
}

function makeDivesStyles() {
  const dives = divBox.children;
  const width = 30;
  const height = 30;
  const step = 10;
  for (let i = 0; i < divBox.children.length; i += 1) {
    dives[i].classList.add("div");
    dives[i].style.width = `${width + i * step}px`;
    dives[i].style.height = `${height + i * step}px`;
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    dives[
      i
    ].style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  }
}

clearBtn.addEventListener("click", toRemoveCollection);
function toRemoveCollection() {
  divBox.innerHTML = "";
}
