let countries = {
    japan: "日本",
    usa: "アメリカ",
    china: "中国",
    korea: "韓国"
};

for (let key in countries) {
    document.write("<tr>");
    document.write("<th>"+ key +"</th>");
    document.write("<td>" + countries[key]+ "</td>");
    document.write("</tr>");
}