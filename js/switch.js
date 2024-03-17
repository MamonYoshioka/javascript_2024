document.getElementById("displayButton").addEventListener("click", function() {
    // 結果表示領域の中身をクリア
    document.getElementById("resultArea").innerHTML = "";
    
    // 文章を表示
    // document.getElementById("resultArea").innerHTML = "ここに表示したい文章を記述します。";
    let n = 2;
    switch (n) {
        case 1:
            document.getElementById("resultArea").innerHTML = "<p>One</p>";
            break;
        case 2:
            document.getElementById("resultArea").innerHTML = "<p>Two</p>";
            break;
        case 3:
            document.getElementById("resultArea").innerHTML = "<p>Three</p>";
            break;
        case 4:
            document.getElementById("resultArea").innerHTML = "<p>Four</p>";
            break;
        default:
            document.getElementById("resultArea").innerHTML = "<p>Ohter</p>";
            break;
    }
});

document.getElementById("display_Button").addEventListener("click", function() {
    // 結果表示領域の中身をクリア
    document.getElementById("result_Area").innerHTML = "";
    
    // 文章を表示
    let n = 10;
    if (n === 1) {
        document.getElementById("result_Area").innerHTML = "<p class='example_3'>One</p>";
    } else if (n === 2) {
        document.getElementById("result_Area").innerHTML = "<p class='example_3'>Two</p>";
    } else if (n === 3) {
        document.getElementById("result_Area").innerHTML = "<p class='example_3'>Three</p>";
    } else if (n === 4) {
        document.getElementById("result_Area").innerHTML = "<p class='example_3'>Four</p>";
    } else {
        document.getElementById("result_Area").innerHTML = "<p class='example_3'>Other</p>";
    }
});