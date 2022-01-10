var dateUpdated = "21 December 2021"

function priceLookup(oName) {

    const OreLookup = {
        //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!
        "Veldspar": 10.11,
        "Concentrated Veldspar" : 10.91,
        "Dense Veldspar": 10.63,

        "Scordite": 17.97,
        "Condensed Scordite": 18.87,
        "Massive Scordite": 18.44,

        "Pyroxeres": 24.30,
        "Solid Pyroxeres": 27.28,
        "Viscous Pyroxeres": 26.82,

        //Moon Ores
        "Bitumens": 1189.15,
        "Brimful Bitumens": 1367.52,
        "Glistening Bitumens": 2378.30,

        "Coesite": 1264.80,
        "Brimful Coesite": 1454.52,
        "Glistening Coesite": 2529.60,

        "Sylvite": 1145.38,
        "Brimful Sylvite": 1317.19,
        "Glistening Sylvite": 2290.76,

        "Zeolites": 1190.00,
        "Brimful Zeolites": 1368.50,
        "Glistening Zeolites": 2380.00,
        //Ice
        "Clear Icicle": 186150.00,
    };
    return oreLookup[oName]
}

var currency = {
    style: "currency",
    currency: "USD"
};


//Display available Items
function itemDisplay() {
    document.getElementById("dispItems").innerHTML = priceLookup('Veldspar');
    /*
    for (let i = 0; i < oreLookup.length; i++) {
        stnd += priceLookup(i) + "<br>";        
    
    document.getElementById("dispItems").innerHTML = '<h3>Standard Ores</h3>' + stnd;
*/
};

//Calculator
function iconCalc() {
    let itemTot;
    let useroutput = [];
    let lnAnswer;
    let tally = 0;
    let userInput = document.getElementById("iconvw").value;
    let data = userInput.trim();
    let rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        console.log(row);
        let elements = row.split("\t");
        console.log(elements);
        
        useroutput.push(lnAnswer);
        tally += parseInt(itemTot);
        console.log(itemTot + " " + tally);
    };        
    document.getElementById("outputIcon").innerHTML = useroutput.toLocaleString("en-US", currency) + "<br><strong>Contract Total: " + tally.toLocaleString() + " ISK</strong>";

};

/*
Regular space: &nbsp;
Two spaces gap: &ensp;
Four spaces gap: &emsp;
*/