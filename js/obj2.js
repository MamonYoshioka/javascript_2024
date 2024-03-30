let person = {
    name: "",
    age: 0,

    information:function () {
        return "名前:&nbsp" + this.name + "<br>" +"年齢:&nbsp" + this.age;
    }
}
person.name = "横浜たろう";
person.age = 20;

let info = person.information();
document.write("<p>" + info + "</p>");
