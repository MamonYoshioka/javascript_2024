let a = "グローバル";

function func() {
    let b = "ローカル";
    document.write("<h2> 関数内処理 </h2>");
    document.write("<p>a: " + a + "</p>" );
    document.write("<p>b: " + b + "</p>" );
}

func();

document.write("<h2>メイン処理</h2>");
document.write("<p>a: " + a + "</p>" );
document.write("<p>b: " + b + "</p>" );