//Object constructor for the items that User will sell to Corp
function Item(name, priceUnit) {
    this.itemName = name;
    this.itemPrice = priceUnit;
    this.output = function() {
        return this.itemName + ": (" + this.itemPrice.toLocaleString("en-US") + " ISK / unit)";
    };
};

//Items available (objects) ***UPDATE PRICES HERE***
    //Standard Ores
    var veld = new Item("Veldspar", 10.11);
    var conVeld = new Item("Concentrated Veldspar", 10.91);
    var denseVeld = new Item("Dense Veldspar", 10.63);

    var scor = new Item("Scordite", 17.97);
    var conScor = new Item("Condensed Scordite", 18.87);
    var massScor = new Item("Massive Scordite", 18.44);

    var pyro = new Item("Pyroxeres", 24.30);
    var solpyro = new Item("Solid Pyroxeres", 27.28);
    var vispyro = new Item("Viscous Pyroxeres", 26.82);

    //Moon Ores
    var bit = new Item("Bitumens", 1189.15);
    var brimBit = new Item("Brimful Bitumens", 1367.52);
    var gliBit = new Item("Glistening Bitumens", 2378.30);

    var coe = new Item("Coesite", 1264.80);
    var brimCoe = new Item("Brimful Coesite", 1454.52);
    var gliCoe = new Item("Glistening Coesite", 2529.60);

    var syl = new Item("Sylvite", 1145.38);
    var brimSyl = new Item("Brimful Sylvite", 1317.19);
    var gliSyl = new Item("Glistening Sylvite", 2290.76);

    var zeo = new Item("Zeolites", 1190.00);
    var brimZeo = new Item("Brimful Zeolites", 1368.50);
    var gliZeo = new Item("Glistening Zeolites", 2380.00);
    //Ice
    var ice = new Item("Clear Icicle", 186150.00);


    var currency = {
        style: "currency",
        currency: "USD"
    };

//Display available Items
function itemDisplay() {
    const StandardOres = [veld, conVeld, denseVeld, scor, conScor, massScor, pyro, solpyro, vispyro];
    const MoonOres = [bit, brimBit, gliBit, coe, brimCoe, gliCoe, syl, brimSyl, gliSyl, zeo, brimZeo,gliZeo];
    let stnd = "";
    let moon = "";
    for (let i = 0; i < StandardOres.length; i++) {
        stnd += StandardOres[i].output() + "<br>";        
    }
    for (let i = 0; i < MoonOres.length; i++) {
        moon += MoonOres[i].output() + "<br>";        
    }
    document.getElementById("dispItems").innerHTML = '<h3>Standard Ores</h3>' + stnd + '<br><h3>Moon Ores</h3>' + moon + '<br><h3>Ice</h3>' + ice.output();

};

//option 2 - allow the user to type in the quantity of each item they have and the calculator would return a simple total in some detailed format.
//Calculator
function option2() {
    let veldQty = parseInt(document.getElementById("veld1").value);
    let conveldQty = parseInt(document.getElementById("veld2").value);
    let denveldQty = parseInt(document.getElementById("veld3").value);

    let scorQty = parseInt(document.getElementById("scor1").value);
    let conscorQty = parseInt(document.getElementById("scor2").value);
    let mascorQty = parseInt(document.getElementById("scor3").value);

    let pyroQty = parseInt(document.getElementById("pyro1").value);
    let solpyroQty = parseInt(document.getElementById("pyro2").value);
    let vispyroQty = parseInt(document.getElementById("pyro3").value);
    
    let veldTot = veldQty * veld.itemPrice;
    let conveldTot = conveldQty * conVeld.itemPrice;
    let denveldTot = denveldQty * denseVeld.itemPrice;

    let scorTot = scorQty * scor.itemPrice;
    let conscorTot = conscorQty * conScor.itemPrice;
    let mascorTot = mascorQty * massScor.itemPrice;

    let pyroTot = pyroQty * pyro.itemPrice;
    let solpyroTot = solpyroQty * solpyro.itemPrice;
    let vispyroTot = vispyroQty * vispyro.itemPrice;

    let grandTot = veldTot + conveldTot + denveldTot + scorTot + conscorTot + mascorTot + pyroTot + solpyroTot + vispyroTot;
    
    document.getElementById("result").innerHTML = "<br><strong>Veldspar</strong><br>" + veld.itemName + ": (" + veldQty + ") units = " + veldTot.toLocaleString("en-US", currency) + " ISK<br>" + conVeld.itemName + ": (" + conveldQty + ") units = " + conveldTot.toLocaleString("en-US", currency) + " ISK<br>" + denseVeld.itemName + ": (" + denveldQty + ") units = " + denveldTot.toLocaleString("en-US", currency) + " ISK<br><br><strong>Scordite</strong><br>" + scor.itemName + ": (" + scorQty + ") units = " + scorTot.toLocaleString("en-US", currency) + " ISK<br>" + conScor.itemName + ": (" + conscorQty + ") units = " + conscorTot.toLocaleString("en-US", currency) + " ISK<br>" + massScor.itemName + ": (" + mascorQty + ") units = " + mascorTot.toLocaleString("en-US", currency) + " ISK<br><br><strong>Pyroxeres</strong><br>"  + pyro.itemName + ": (" + pyroQty + ") units = " + pyroTot.toLocaleString("en-US", currency) + " ISK<br>" + solpyro.itemName + ": (" + solpyroQty + ") units = " + solpyroTot.toLocaleString("en-US", currency) + " ISK<br>" + vispyro.itemName + ": (" + vispyroQty + ") units = " + vispyroTot.toLocaleString("en-US", currency) + " ISK<br><strong>Contract Total: " + grandTot.toLocaleString("en-US", currency) + " ISK<br>";
    //alert(grandTot + " ISK")
};

// THIS IS THE START OF OPT 1 (THE LOOT CALC)
function lootLogCalc() {
    var char = [];
    let itemTot;
    let useroutput = [];
    let lnAnswer;
    let userInput = document.getElementById("inpLoot").value;
    let data = userInput.trim();
    let rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        //console.log(row);
        let elements = row.split("\t");
        if (char.includes(elements[1])) {
            //console.log(elements[1]);
        } else {
            char.push(elements[1]);
        };
        console.log(char);
        switch (elements[2]) {
            case veld.itemName:
                itemTot = parseInt(elements[3]) * veld.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case conVeld.itemName:
                itemTot = parseInt(elements[3]) * conVeld.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");            
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case denseVeld.itemName:
                itemTot = parseInt(elements[3]) * denseVeld.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case scor.itemName:
                itemTot = parseInt(elements[3]) * scor.itemPrice;
                console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case conScor.itemName:
                itemTot = parseInt(elements[3]) * conScor.itemPrice;
                console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case massScor.itemName:
                itemTot = parseInt(elements[3]) * massScor.itemPrice;
                console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");            
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case pyro.itemName:
                itemTot = parseInt(elements[3]) * pyro.itemPrice;
                console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");            
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            case solpyro.itemName:
                itemTot = parseInt(elements[3]) * solpyro.itemPrice;
                console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
        
            case vispyro.itemName:
                itemTot = parseInt(elements[3]) * vispyro.itemPrice;
                console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");        
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case bit.itemName:
                itemTot = parseInt(elements[3]) * bit.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case brimBit.itemName:
                itemTot = parseInt(elements[3]) * brimBit.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case gliBit.itemName:
                itemTot = parseInt(elements[3]) * gliBit.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case coe.itemName:
                itemTot = parseInt(elements[3]) * coe.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case brimCoe.itemName:
                itemTot = parseInt(elements[3]) * brimCoe.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case gliCoe.itemName:
                itemTot = parseInt(elements[3]) * gliCoe.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case zeo.itemName:
                itemTot = parseInt(elements[3]) * zeo.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case brimZeo.itemName:
                itemTot = parseInt(elements[3]) * brimZeo.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;

            case gliZeo.itemName:
                itemTot = parseInt(elements[3]) * gliZeo.itemPrice;
                //console.log(elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK");
                lnAnswer = elements[2] + " (" + elements[3] + ")units " + itemTot.toLocaleString("en-US", currency) + " ISK<br>";
                break;
    
            default:
                break;
        };
        useroutput.push(lnAnswer);
    };        
    document.getElementById("outputLoot").innerHTML = useroutput.toLocaleString("en-US", currency);
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