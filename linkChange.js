let string_1 = "Вот ссылка http://ssylka.ru/temp/index.php + прочее содержимое";
let string_2 = "просто ssylka.ru + прочее содержимое";
let string_3 = "и такая ссылка https://ssylka.ru + прочее содержимое";

function linkChange(str) {
  let link = str.match("((http|https)://)?(www.)?([a-z0-9-]+.)+[a-z]{2,6}");
  let cutLink = link[0].replace("http://", "");
  cutLink = cutLink.replace("https://", "");
  let newLink = `<Link to="https://${link[0]}"/>`;
  let result = str.replace(link[0], newLink);
  return result;
}

console.log(
  `Исходная строка: ${string_1} 
Результат: ${linkChange(string_1)}`
);
console.log(
  `Исходная строка: ${string_2} 
Результат: ${linkChange(string_2)}`
);
console.log(
  `Исходная строка: ${string_3} 
Результат: ${linkChange(string_3)}`
);
