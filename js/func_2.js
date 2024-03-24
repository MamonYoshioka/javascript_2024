function stars(n) {
    document.write("<p>");
    for (let index = 0; index < n; index++) {
        document.write("★");
    }
    document.write("</p>");
    return;
}
stars(5);
stars(3);