// let employee = [
//     {
//         name:"佐藤",
//         age:41,
//         birthplace:"東京"
//     },
//     {
//         name:"佐藤",
//         age:41,
//         birthplace:"東京"
//     },
//     {
//         name:"佐藤",
//         age:41,
//         birthplace:"東京"
//     }
// ];
// employee.forEach(function(item){
//     document.write("<tr>");
//     document.write("<td>" + item + "</td>");
//     document.write("</tr>");
// });

let employee = [
    ["佐藤", 41 ,"東京"],
    ["鈴木", 25 ,"大阪"],
    ["林", 34 ,"札幌"]
];

employee.forEach(function(data){
    document.write("<tr>");
    data.forEach(function(item){
        document.write("<td>" + item + "</td>");
    });
    document.write("</tr>");
});