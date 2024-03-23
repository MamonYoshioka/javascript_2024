let dict = {apple:"りんご",banana:"バナナ",orange:"オレンジ"};

document.write(dict.apple);
dict.apple = "林檎";
document.write("<br>");
document.write(dict.apple);
document.write("<br>");

dict.grape = "ぶどう";
document.write("<br>");
console.log(dict);

document.write("<br>");
delete dict.orange;
console.log(dict);