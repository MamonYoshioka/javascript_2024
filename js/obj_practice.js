let clac = {
    a:0,
    b:0,

    add:function(){
        let Add = this.a + this.b;
        return Add;
    },

    sub:function(){
        let Sub = this.a - this.b;
        return Sub;
    }
};

clac.a = 100;
clac.b = 10;

document.write("<p>a+b =&nbsp"+ clac.add() +"</p>");
document.write("<p>a-b =&nbsp"+ clac.sub() +"</p>");