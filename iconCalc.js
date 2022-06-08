const changeDate = "6/8/2022";
const priceList = {
    //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!
"Veldspar" : 9.45	,
"Concentrated Veldspar" : 8.20	,
"Dense Veldspar" : 10.43	,
"Scordite" : 10.35	,
"Condensed Scordite" : 9.81	,
"Massive Scordite" : 9.05	,
"Pyroxeres" : 19.80	,
"Solid Pyroxeres" : 17.99	,
"Viscous Pyroxeres" : 14.72
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
    //console.log(userInput);
    let data = userInput.trim();
    let rows = data.split("\n");
    let reciept = [];
    let answer = "";
    let tot = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let elements = row.split("\t");
        let key = elements[0];
        console.log(key)
        let lnprice = priceList[key] * elements[1];
        let line = `<tr><td>${elements[0]}</td><td>${elements[1]}</td><td>${lnprice.toLocaleString("en-US", currency)} ISK</td>`;
        //console.log(elements[0] + priceList[key]);
        reciept.push(line);
        //console.log(lnprice);
        tot += lnprice;
        //console.log(tot);

    };
    answer = "<table><th>Item</th><th>Qty</th><th>Total</th>" + reciept.join("</tr>") + "<tr><td colspan='2'><strong>Grand Total:</strong></td><td><strong>" + tot.toLocaleString("en-US",currency) + " ISK</strong></td></tr></table>";
    document.querySelector("#sellOut").innerHTML = answer;

};


//test for fleet log


function fleet() {
    let CharacterTot = {
        "Heinrik Liat Cadelanne":{
            "Coesite":12821,
            "Brimful Bitumens": 2159
        }
        
    };
    let text = ""
    let charList = [];
    let userInput = document.querySelector("#inpBox").value;
    let data = userInput.trim();
    let rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let hasLooted = row.split("has looted ");
        //console.log("Split has looted: " + hasLooted);
        let x = hasLooted[0].split(" ");
        x.shift();
        let charName = x.join(" ");
        let y = hasLooted[1].split(" x ");
        let qty = y[0];
        qty = parseFloat(qty.replace(/,/g, ""));
        let item = y[1];
        let itemtot = priceList[item] * qty;
        CharacterTot[charName] = 

        console.log("Name = " + charName + " Qty/Item = (" + qty + ") " + item + " total ISK: " + itemtot.toLocaleString("en-US",currency));
        //console.log(itemtot);
        console.log(CharacterTot);
        let lntext = `<tr><td>${charName}</td><td>${qty}</td><td>${item}</td><td>${itemtot.toLocaleString("en-US",currency)}</td></tr>`;
        text += lntext;
    
    };
        document.querySelector("#sellOut").innerHTML = `<table><th>Character</th><th>QTY</th><th>Item</th><th>Total</th>${text}</table>`;
};