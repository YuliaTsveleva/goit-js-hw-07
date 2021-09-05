/*
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет 
инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет 
меняться размер текста.*/

const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

const currentFontSize = input.clientHeight;

text.style.fontSize = `${currentFontSize}px`;

const proportion = currentFontSize / input.value;

input.addEventListener("input", changeFontSize);

function changeFontSize() {
  let changedFontSize = 0.32 * input.value;
  text.style.fontSize = `${changedFontSize}px`;
}
