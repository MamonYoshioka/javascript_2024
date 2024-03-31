class Car {
    // 生産台数
    static number = 0;
    constructor(){
        // 生産台数を増やす
        Car.number++;
        // 製造番号を増やす
        this.serial = Car.number;
    }
    // 製造番号の取得
    getSerial(){
        return this.serial;
    }
}
// 生産台数の表示確認
console.log(Car.number);

// 自動車クラスのインスタンス生成
car1 = new Car();
car2 = new Car();

document.write("<p>car1のシリアル番号:&nbsp"+ car1.getSerial() +"</p>");
document.write("<p>car2のシリアル番号:&nbsp"+ car2.getSerial() +"</p>");

// インスタンスを生成後の生産台数の表示確認
console.log(Car.number);