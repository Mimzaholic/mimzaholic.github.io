//option 2 - allow the user to type in the quantity of each item they have and the calculator would return a simple total in some detailed format.
//Object constructor for the items that User will sell to Corp
function Item(name, priceUnit, bonus) {
    this.itemName = name;
    this.itemPrice = priceUnit;
    this.itemBonus = bonus
    this.output = function() {
        return this.itemName + ": (" + this.itemPrice + " ISK)";
    };
}
//Items available (objects) ***UPDATE PRICES HERE***
    const veld = new Item("Veldspar", 3.82, "0%");
    const conVeld = new Item("Concentrated Veldspar", 10.40, "5%");
    const denseVeld = new Item("Dense Veldspar", 11.20, "10%");

    const scor = new Item("Scordite", 14.85, "0%");
    const conScor = new Item("Condensed Scordite", 14.85, "5%");
    const massScor = new Item("Massive Scordite", 14.85, "10%");

    const prox = new Item("Pyroxeres", 47.32, "0%");
    const solProx = new Item("Solid Pyroxeres", 47.32, "5%");
    const visProx = new Item("Viscous Pyroxeres", 47.32, "10%");

//Display available Items
function itemDisplay() {
    document.getElementById("dispItems").innerHTML = 
'<form><label for="veld1">' + veld.output() + '</label><br><input type="number" name="veld1" id="veld1" value="0" autofocus><br><label for="veld2">' + conVeld.output() + '</label><br><input type="number" name="veld2" id="veld2" value="0"><br><label for="veld3">' + denseVeld.output() + '</label><br><input type="number" name="veld3" id="veld3" value="0"><br><br><label for="scor1">' + scor.output() + '</label><br><input type="number" name="scor1" id="scor1" value="0"><br><label for="scor2">' + conScor.output() + '</label><br><input type="number" name="scor2" id="scor2" value="0"><br><label for="scor3">' + massScor.output() + '</label><br><input type="number" name="scor3" id="scor3" value="0"><br><br><label for="pyro1">' + prox.output() + '</label><br><input type="number" name="pyro1" id="pyro1" value="0"><br><label for="pyro2">' + solProx.output() + '</label><br><input type="number" name="pyro2" id="pyro2" value="0"><br><label for="pyro3">' + visProx.output() + '</label><br><input type="number" name="pyro3" id="pyro3" value="0"><br><br><button type="button" onclick="option2()">Calculate</button><button type="reset">Reset</button></form>'
}

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
}

/*
Regular space: &nbsp;
Two spaces gap: &ensp;
Four spaces gap: &emsp;
*/