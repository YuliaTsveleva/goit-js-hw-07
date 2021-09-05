/*Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/

let counterValue = Number(document.querySelector("#value").textContent);
const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');

incrBtn.addEventListener("click", increment);
decrBtn.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  document.querySelector("#value").textContent = String(counterValue);
}

function decrement() {
  counterValue -= 1;
  document.querySelector("#value").textContent = String(counterValue);
}
