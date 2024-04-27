class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    information(){ 
        return `Name: ${this.name}, Age:${this.age}.`
    } 
}

const person = new Person('太郎', 25);
let info = person.information();

const infoElement = document.createElement('div')
infoElement.textContent = info;

document.body.appendChild(infoElement);

