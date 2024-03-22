let number = [
    ["0","zero"],
    ["1","one"],
    ["2","two"],
    ["3","three"],
    ["4","four"],
    ["5","five"]
];

for (let i = 0; i < number.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < number[i].length; j++) {
        document.write("<td>"+ number[i][j] +"</td>");
    }
    document.write("</tr>");
    
}