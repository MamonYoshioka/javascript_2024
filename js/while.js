let i = 0;

while (i < 3) {
    document.write("<div class='sample'>I like Javascript.</div>");
    i++;
    // break文
    // if (i == 2) {
    //     break;
    // }
}

let j = 0;

while (j < 5) {
    j++;
    // continue文
    if(j == 3) {
        continue;
    }
    document.write("<div>"+ j +"</div>");
}