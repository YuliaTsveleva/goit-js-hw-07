// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию
// в список ul.ingredients. Для создания DOM - узлов
// используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});
const ingredientsContainer = document.querySelector("#ingredients");

ingredientsContainer.append(...ingredientsItems);
