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

 suzuki = new Person("鈴木一郎", 20);
 tanaka = new Person("田中たろう", 30);

 let info1 = suzuki.information();
 let info2 = tanaka.information();


document.write("<p>" + info1 + "</p>");
document.write("<p>" + info2 + "</p>");
