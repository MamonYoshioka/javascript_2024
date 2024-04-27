class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    information(){ 
        return `Name: ${this.name}. Age:${this.age}.`
    } 
}

class Students extends Person {
    constructor(name, age , grade){
        super(name, age);
        this.grade = grade;
    }
    information(){
        return super.information() + `Grade:${this.grade}`
    }

}
const person = new Person('太郎', 25);
let info = person.information();

const student = new Students('二郎', 20, 1);
let st_info = student.information();

const infoElement = document.createElement('div')
infoElement.textContent = info;

document.body.appendChild(infoElement);

const studentElement = document.createElement('div')
studentElement.textContent = st_info;

document.body.appendChild(studentElement);
