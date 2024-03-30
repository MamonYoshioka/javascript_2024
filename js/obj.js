let person = {}
console.log(person);
person.name = "Suzuki";
console.log(person);
person.age = 20;
console.log(person);
person.information  = function(){
    return "名前は" + this.name + "、年齢は" + this.age + "歳";
};
console.log(person);
console.log(person.information());