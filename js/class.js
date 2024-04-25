// スーパークラス定義
class Clac{
    // コンストラクタ
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    // メソッド
    add(){
        let ans = this.num1 + this.num2;
        return ans;
    }
    sub(){
        let ans = this.num2 - this.num1;
        return ans;
    }
}
// サブクラス定義
class ExClac extends Clac {
    // メソッド
    // 掛け算
    mul(){
        let ans = this.num1 * this.num2;
        return ans;
    }
    // 割り算
    div(){
        let ans = this.num2 / this.num1;
        return ans;
    }
}

clac = new ExClac(5, 10);
document.write(`<div>num1 = ${clac.num1}</div>`);
document.write(`<div>num2 = ${clac.num2}</div>`);
document.write(`<div>num1 + num2 = ${clac.add()}</div>`);
document.write(`<div>num2 - num1 = ${clac.sub()}</div>`);
document.write(`<div>num1 x num2 = ${clac.mul()}</div>`);
document.write(`<div>num2 ÷ num1 = ${clac.div()}</div>`)