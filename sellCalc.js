//Object constructor for the items that User will sell to Corp
function Item(name, priceUnit, bonus) {
    this.itemName = name;
    this.itemPrice = priceUnit;
    this.itemBonus = bonus
    this.output = function() {
        return this.itemName + ": (" + this.itemPrice + " ISK)";
    };
};
//Items available (objects) ***UPDATE PRICES HERE***
    const veld = new Item("Veldspar", 10.30, "0%");
    const conVeld = new Item("Concentrated Veldspar", 11.07, "5%");
    const denseVeld = new Item("Dense Veldspar", 11.70, "10%");

    const scor = new Item("Scordite", 18.67, "0%");
    const conScor = new Item("Condensed Scordite", 19.08, "5%");
    const massScor = new Item("Massive Scordite", 19.35, "10%");

    const prox = new Item("Pyroxeres", 21.02, "0%");
    const solProx = new Item("Solid Pyroxeres", 22.50, "5%");
    const visProx = new Item("Viscous Pyroxeres", 26.96, "10%");

//Display available Items
function itemDisplay() {
    document.getElementById("dispItems").innerHTML = 
'<form><label for="veld1">' + veld.output() + '</label><br><input type="number" name="veld1" id="veld1" value="0" autofocus><br><label for="veld2">' + conVeld.output() + '</label><br><input type="number" name="veld2" id="veld2" value="0"><br><label for="veld3">' + denseVeld.output() + '</label><br><input type="number" name="veld3" id="veld3" value="0"><br><br><label for="scor1">' + scor.output() + '</label><br><input type="number" name="scor1" id="scor1" value="0"><br><label for="scor2">' + conScor.output() + '</label><br><input type="number" name="scor2" id="scor2" value="0"><br><label for="scor3">' + massScor.output() + '</label><br><input type="number" name="scor3" id="scor3" value="0"><br><br><label for="pyro1">' + prox.output() + '</label><br><input type="number" name="pyro1" id="pyro1" value="0"><br><label for="pyro2">' + solProx.output() + '</label><br><input type="number" name="pyro2" id="pyro2" value="0"><br><label for="pyro3">' + visProx.output() + '</label><br><input type="number" name="pyro3" id="pyro3" value="0"><br><br><button type="button" onclick="option2()">Calculate</button><button type="reset">Reset</button></form>'
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

    let proxQty = parseInt(document.getElementById("pyro1").value);
    let solproxQty = parseInt(document.getElementById("pyro2").value);
    let visproxQty = parseInt(document.getElementById("pyro3").value);
    
    let veldTot = veldQty * veld.itemPrice;
    let conveldTot = conveldQty * conVeld.itemPrice;
    let denveldTot = denveldQty * denseVeld.itemPrice;

    let scorTot = scorQty * scor.itemPrice;
    let conscorTot = conscorQty * conScor.itemPrice;
    let mascorTot = mascorQty * massScor.itemPrice;

    let pyroTot = proxQty * prox.itemPrice;
    let solpyroTot = solproxQty * solProx.itemPrice;
    let vispyroTot = visproxQty * visProx.itemPrice;

    let grandTot = veldTot + conveldTot + denveldTot + scorTot + conscorTot + mascorTot + pyroTot + solpyroTot + vispyroTot;
    
    document.getElementById("result").innerHTML = "<br><strong>Veldspar</strong><br>" + veld.itemName + ": (" + veldQty + ") units = " + veldTot.toFixed(2) + " ISK<br>" + conVeld.itemName + ": (" + conveldQty + ") units = " + conveldTot.toFixed(2) + " ISK<br>" + denseVeld.itemName + ": (" + denveldQty + ") units = " + denveldTot.toFixed(2) + " ISK<br><br><strong>Scordite</strong><br>" + scor.itemName + ": (" + scorQty + ") units = " + scorTot.toFixed(2) + " ISK<br>" + conScor.itemName + ": (" + conscorQty + ") units = " + conscorTot.toFixed(2) + " ISK<br>" + massScor.itemName + ": (" + mascorQty + ") units = " + mascorTot.toFixed(2) + " ISK<br><br><strong>Pyroxeres</strong><br>"  + prox.itemName + ": (" + proxQty + ") units = " + pyroTot.toFixed(2) + " ISK<br>" + solProx.itemName + ": (" + solproxQty + ") units = " + solpyroTot.toFixed(2) + " ISK<br>" + visProx.itemName + ": (" + visproxQty + ") units = " + vispyroTot.toFixed(2) + " ISK<br><strong>Contract Total: " + grandTot.toFixed(2) + " ISK<br>";
    //alert(grandTot.toFixed(2) + " ISK")
};

// THIS IS THE START OF OPT 1 (THE LOOT CALC)
function byElements() {
    let itemTot;
    let useroutput = [];
    let lnAnswer;
    let userInput = document.getElementById("inp").value;
    let data = userInput.trim();
    let rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        //console.log(row);
        let elements = row.split("\t");
        //console.log(elements[2]);
        switch (elements[2]) {
            case veld.itemName:
                itemTot = parseInt(elements[3]) * veld.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
        
            case conVeld.itemName:
                itemTot = parseInt(elements[3]) * conVeld.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");            
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
    
            case denseVeld.itemName:
                itemTot = parseInt(elements[3]) * denseVeld.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
        
            case scor.itemName:
                itemTot = parseInt(elements[3]) * scor.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
    
            case conScor.itemName:
                itemTot = parseInt(elements[3]) * conScor.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
    
            case massScor.itemName:
                itemTot = parseInt(elements[3]) * massScor.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");            
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
        
            case prox.itemName:
                itemTot = parseInt(elements[3]) * prox.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");            
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
    
            case solProx.itemName:
                itemTot = parseInt(elements[3]) * solProx.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
        
            case visProx.itemName:
                itemTot = parseInt(elements[3]) * visProx.itemPrice;
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK<br>";
                break;
    
            default:
                break;
        };
        useroutput.push(lnAnswer);
    };        
    document.getElementById("output").innerHTML = useroutput;

};

/*
Regular space: &nbsp;
Two spaces gap: &ensp;
Four spaces gap: &emsp;
*/