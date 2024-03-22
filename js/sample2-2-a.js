let staff = [
    ["佐藤","41","東京"],
    ["田中","25","大阪"],
    ["林","34","札幌"]
];

for (let i = 0; i < staff.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < staff[i].length; j++) {
        document.write("<td>"+ staff[i][j] +"</td>");
        
    }
    
}