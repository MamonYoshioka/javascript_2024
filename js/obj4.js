class Person {
    //コンストラクタ
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //メソッド
    information(){
        return "Name:&nbsp" + this.name + "<br>" + "Age:&nbsp" +this.age;
    }
}
 let persons =[];
 persons.push(new Person("鈴木一郎", 20));
 persons.push(new Person("ジョン万次郎", 54));
 persons.push(new Person("佐々木小次郎", 186));
 
 persons.forEach(function(person) {
    document.write("<p>"+ person.information() +"</p>");
 });


document.write("<p>" + info1 + "</p>");
document.write("<p>" + info2 + "</p>");
