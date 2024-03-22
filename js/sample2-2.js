let animals = ["dog","cat","bird"];
document.write(animals[0]);
document.write("<br>");
document.write(animals);
document.write("<br>");
document.write("配列の長さ：" + animals.length);

document.write("<hr>");
document.write("<h2 style='font-size:18px;'>末尾に要素を追加</h2>");
animals.push("tiger");
document.write(animals);

document.write("<hr>");
document.write("<h2 style='font-size:18px;'>先頭に要素を追加</h2>");
animals.unshift("elephant");
document.write(animals);

document.write("<hr>");
document.write("<h2 style='font-size:18px;'>末尾の要素を削除</h2>");
animals.pop("tiger");
document.write(animals);

document.write("<hr>");
document.write("<h2 style='font-size:18px;'>先頭の要素を削除</h2>");
animals.shift("elephant");
document.write(animals);

document.write("<hr>");
document.write("<h2 style='font-size:18px;'>配列・リスト・繰り返し処理の組み合わせ</h2>");
let fruits = ["りんご","もも","バナナ"];
for (let index = 0; index < fruits.length; index++) {
    document.write("<li>" + fruits[index] +"</li>");
}


