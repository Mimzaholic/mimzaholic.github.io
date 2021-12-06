var currency = {
        style: "currency",
        currency: "USD"
};

function priceLookup(oName) {

    var oreLookup = {
        "Veldspar" : 10.11,
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


//Display available Items
function itemDisplay() {
    document.getElementById("dispItems").innerHTML = priceLookup('Veldspar');
    /*
    for (let i = 0; i < oreLookup().length; i++) {
        stnd += oreLookup(i) + "<br>";        
    
    document.getElementById("dispItems").innerHTML = '<h3>Standard Ores</h3>' + stnd;
*/
};

// THIS IS THE START OF OPT 1 (THE LOOT CALC)
function lootLogCalc() {
    var char = {
        "Character" : 0,
    };
    let userInput = document.getElementById("inpLoot").value;
    let charlist = []
    let data = userInput.trim();
    let rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        //console.log(row);
        let elements = row.split("\t");
        //console.log(elements);
        if (charlist.includes(elements[1])) {
            console.log(char[elements[1]] + ": Already in List.");
            char[elements[1]] = char[elements[1]] + (priceLookup(elements[2]) * elements[3]);
        } else {
            charlist.push(elements[1]);
            console.log(elements[1] + ": Added.");
            char[elements[1]] = priceLookup(elements[2]) * elements[3];
        };
//add prices
        //char[elements[1]] = priceLookup(elements[2]) * elements[3];
        console.log(char)
        //useroutput.push(update.toLocaleString("en-US", currency));

    };        
    document.getElementById("outputLoot").innerHTML = char;
    console.log(char);

};

function iconCalc() {
    let itemTot;
    let useroutput = [];
    let lnAnswer;
    let tally = 0;
    let userInput = document.getElementById("inpIcon").value;
    let data = userInput.trim();
    let rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        //console.log(row);
        let elements = row.split("\t");
        //console.log(elements);
        switch (elements[0]) {
            case veld.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * veld.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case conVeld.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * conVeld.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");            
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case denseVeld.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * denseVeld.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case scor.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * scor.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case conScor.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * conScor.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case massScor.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * massScor.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");            
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case pyro.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * pyro.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");            
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case solpyro.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * solpyro.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case vispyro.itemName:
                itemTot = parseFloat(elements[1].replace(/,/g, '')) * vispyro.itemPrice;
                console.log(elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[0] + " (" + elements[1] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            default:
                break;
        };
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