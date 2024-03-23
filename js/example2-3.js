let prefectures = [
    {
        name:"東京都",
        location: "東京",
        population:"1396万人",
        URL:"https://www.metro.tokyo.lg.jp/"
    },
    {
        name:"神奈川県",
        location: "横浜市",
        population:"905.8万人",
        URL:"https://www.pref.kanagawa.jp/"
    },
    {
        name:"大阪府",
        location: "大阪市",
        population:"882.3万人",
        URL:"https://www.pref.osaka.lg.jp/"
    },
    {
        name:"愛知県",
        location: "名古屋市",
        population:"755.3万人",
        URL:"https://www.pref.aichi.jp/"
    }

];

let rank = 1;
for(let prefecture of prefectures){
    document.write("<tr>");
    document.write("<td>"+ rank +"</td>");
    for(let key in prefecture){
        let data = prefecture[key];
        if(key == "URL"){
            data = "<a href=\""+ data +"\">" + data + "</a>";
        }
        document.write("<td>" + data + "</td>");
    }
    document.write("</tr>");
    rank++;
}