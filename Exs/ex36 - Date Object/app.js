// Date

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const date = new Date();
console.log(date);

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());

console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} de ${
  months[month]
} de ${date.getFullYear()}`;
console.log(sentence);

document.body.innerHTML = sentence;
