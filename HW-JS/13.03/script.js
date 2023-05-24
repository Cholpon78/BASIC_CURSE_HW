/*Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers. */
// вначале в index.html создаем div с классом numbers

const divNumbers = document.querySelector('.numbers')
for (let i = 100; i >= 50; i -= 10) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = i;
    divNumbers.appendChild(newParagraph)

}
//Написать цикл, который проходится по массиву строк, для каждой строки 
//создает параграф и добавляет его в div с классом strings_container. 
//Строки взять произвольные.

const words = ["First word", "Second word", "Third word"];

const container = document.querySelector(".strings-container");

for (let i = 0; i < words.length; i++) {
    const p = document.createElement("p");
    p.textContent = words[i];
    container.appendChild(p);
}
/* Написать цикл, который проходится по массиву с объектами - 
у объектов свойства first_name, last_name и  age (данные взять произвольные) - 
и создает карточки только для совершеннолетних пользователей. 
Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
Добавить все карточки в div с классом users_container.*/

const family = [
    {
        firstName: "Talant",
        lastName: "Kazakov",
        age: 50
    },
    {
        firstName: "Cholpon",
        lastName: "Munduz",
        age: 44
    },
    {
        firstName: "Bayastan",
        lastName: "Yskakov",
        age: 19
    },
    {
        firstName: "Dastan",
        lastNam: "Yskakov",
        age: 17
    },
    {
        firstName: "Bilal",
        lastName: "Yskakov",
        age: 8
    }
];


const familyContainer = document.querySelector('.users-container');

for (let i = 0; i < family.length; i++) {
    const user = family[i];

    if (user.age >= 18) {

        const card = document.createElement('div');
        card.classList.add('user-card');

        const name = document.createElement('h2');
        name.innerText = `Это- ${user.firstName} ${user.lastName}`;
        const age = document.createElement('p');
        age.innerText = `Ему- Age: ${user.age}`;

        card.appendChild(name);
        card.appendChild(age);

        familyContainer.appendChild(card);
    }
}




