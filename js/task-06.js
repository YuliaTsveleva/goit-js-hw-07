/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в 
его атрибуте data-length.
Если введено подходящее количество, то border инпута 
становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

const input = document.querySelector("#validation-input");

const lengthForVerification = Number(
  document.querySelector("#validation-input").dataset.length
);

input.addEventListener("blur", checkInputAndColorBorder);
function checkInputAndColorBorder() {
  if (input.value.length === lengthForVerification) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

// 2 вариант
// function checkInputAndColorBorder() {
//   input.classList.add("valid");
//   if (input.value.length === lengthForVerification) {
//     input.classList.replace("invalid", "valid");
//   } else {
//     input.classList.replace("valid", "invalid");
//   }
// }
