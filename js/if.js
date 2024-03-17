/*
これはサンプルのブロックコメント
下のコードは100以上の場合にアラートを表示するようなプログラム
*/

let num = 100;
num = 1;
num = 0;

console.log(num >= 100);

if (num >= 100) {
    alert("numは100以上の数です。");
}else if(num === 0){
    document.write("<div class='zero'>numは0です!!</div>");
}else{
    document.write("<div class='sample'>numは100未満です</div>");
}