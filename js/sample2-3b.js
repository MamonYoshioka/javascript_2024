let companies = [
    {
        name: "Google",
        company: "Alphabet Inc.",
        founding: 1998,
        URL:"https://abc.xyz/"
    },
    {
        name: "Apple",
        company: "Apple Inc.",
        founding: 1976,
        URL: "https://www.apple.com/"
    },
    {
        name: "Meta",
        company: "Meta Platforms, Inc.",
        founding: 2004,
        URL: "https://www.meta.com"
    },
    {
        name: "Amazon",
        company:"Amazon.com Inc.",
        founding:1994,
        URL: "https://www.amazon.com/"
    },
    {
        name: "Microsoft",
        company: "Microsoft Corporation",
        founding:1975,
        URL: "https://www.microsoft.com"
    }
];


for (let company of companies) {
    document.write("<tr>");
    for (let key in company) {
        let data = company[key];
        if (key == "URL") {
            data = "<a href=\""+ data +"\">" + data + "</a>" ;  
        }
        document.write("<td>"+ data + "</td>");
    }
    document.write("</tr>");
}