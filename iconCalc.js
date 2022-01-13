const changeDate = "1/9/2022";
const priceList = {
    //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!
    "Veldspar": 12.29,
    "Concentrated Veldspar": 11.14,
    "Dense Veldspar": 11.07,

    "Scordite": 18.81,
    "Condensed Scordite": 16.34,
    "Massive Scordite": 18.9,

    "Pyroxeres": 22.98,
    "Solid Pyroxeres": 24.5,
    "Viscous Pyroxeres": 23.49,
    //Moon Ores
    "Bitumens": 1800,
    "Brimful Bitumens": 2070,
    "Glistening Bitumens": 2900,

    "Coesite": 1500,
    "Brimful Coesite": 1725,
    "Glistening Coesite": 2700,

    "Sylvite": 1800,
    "Brimful Sylvite": 2070,
    "Glistening Sylvite": 3000,

    "Zeolites": 1500,
    "Brimful Zeolites": 1725,
    "Glistening Zeolites": 2700,
    //Ice
    "Clear Icicle": 170820
};

var currency = {
    style: "currency",
    currency: "USD"
};

let headerRow = ["Item", "Price"];
let userArray = [];
for (const key in priceList) {
    let userline = "<tr><td>" +  key + "</td><td>" + priceList[key].toLocaleString("en-US", currency) + " ISK</td>";
    userArray.push(userline);
};
let text = userArray.join("</tr>")


document.querySelector(".list").innerHTML = "<h3 style='text-align: center'>Prices updated on: " + changeDate + "</h3><br><table id='priceTable'><tr><th>" + headerRow[0] + "</th><th> " + headerRow[1] + "</th></tr>" + text + "</table>";

function icon() {
    let userInput = document.querySelector("#inpBox").value;
    console.log(userInput);
    let data = userInput.trim();
    let rows = data.split("\n");
    let reciept = [];
    let answer = "";
    let tot = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let elements = row.split("\t");
        let key = elements[0];
        let lnprice = priceList[key] * elements[1];
        let line = "<tr><td>" + elements[0] + "</td><td>" + lnprice.toLocaleString("en-US", currency) + " ISK</td>";
        reciept.push(line);
        console.log(lnprice);
        tot += lnprice;
        console.log(tot);

    };
    answer = "<table><th>Item</th><th>Total</th>" + reciept.join("</tr>") + "<tr><td><strong>Grand Total:</strong></td><td><strong>" + tot.toLocaleString("en-US",currency) + " ISK</strong></td></tr></table>";
    document.querySelector("#sellOut").innerHTML = answer;

};