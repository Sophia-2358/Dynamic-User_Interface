let students = [
    {id:0, name: "Alice N. Borderland", program: 'Napapapunta sa Borderland'},
    {id:1, name: "Harry J. Potter", program: 'Supercalifragilisticexpialidocious'},
    {id:2, name: "Hermione Jean G. Malfoy", program: 'Crush ni Ron Weasley'},
    {id:3, name: "Maria Clara", program: 'Kamukha ni Julie Anne San Jose'},
    {id:4, name: "Kapitan T. Iago", program: 'Crush ni Maria Clara'},
];

const createStudent = (name, program) => { //automate yung creation ng student
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    h2.innerHTML = name;
    p.innerHTML = program;
    button.innerHTML = "Delete";

    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(button);

    article.classList.add('list-item');
    return article;
}

const studentList = students.map((s) => {
    return createStudent(s.name, s.program);
});
console.log(studentList);

const studentListContainer = document.querySelector("#studentList");
studentList.forEach((s) => {
    studentListContainer.append(s);
});