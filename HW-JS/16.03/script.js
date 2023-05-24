/* Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px. */
const square = document.querySelector(".square");
const changeButton = document.querySelector(".changeButton");

changeButton.addEventListener("click", () => {
  
  square.style.backgroundColor = "green";
  square.style.width = "100px";
  square.style.height = "100px";
});

/* Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.  */
const qadrat = document.querySelector(".qadrat");
const button1 = document.querySelector(".button");

button1.addEventListener("click", () => {
    qadrat.style.backgroundColor = "blue";
    console.log("New color: " + qadrat.style.backgroundColor);
});

/* Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.  */
const qadrat1 = document.querySelector(".qadrat1");
const button2 = document.querySelector(".button1");

button2.addEventListener("click", () => {
   
    qadrat1.style.width = "170px";
    qadrat1.style.height = "170px";
});

/* Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный. */
const root = document.querySelector(".root");
const button3 = document.querySelector(".button3");

button3.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Random Text";
        paragraph.style.color = "blue";
        root.appendChild(paragraph);
});

/*Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий. */
        const root1 = document.querySelector(".root1");
		const button4 = document.querySelector(".button4");
		let isBlue = true;

button4.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Random Text";
        paragraph.style.color = isBlue ? "blue" : "green";
        root1.appendChild(paragraph);
        isBlue = !isBlue;
		});