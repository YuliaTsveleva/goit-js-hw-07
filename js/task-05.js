/*Напиши скрипт который, при наборе текста 
в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться 
строка 'незнакомец'.
 */

const input = document.querySelector("#name-input");
console.dir(input);

const nameForGreeting = document.querySelector("#name-output");
console.dir(nameForGreeting);

input.addEventListener("input", changeInput);

function changeInput(event) {
  nameForGreeting.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameForGreeting.textContent = "незнакомец";
  }
}
