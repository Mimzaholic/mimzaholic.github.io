const Items = ["Veldspar", "Concentrated Veldspar", "Dense Veldspar", "Scordite", "Condensed Scordite", "Massive Scordite", "Pyroxeres", "Solid Pyroxeres", "Viscous Pyroxeres"];
const Prices = [10.30,11.07,11.70,18.67,19.08,19.35,21.02,22.50,26.96]

function byElements() {
    let itemTot;
    let useroutput;
    let lnAnswer;
    let stringAnswer = String(lnAnswer);
    let userInput = document.getElementById("inp").value;
    let data = userInput.trim();
    let rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        //console.log(row);
        let elements = row.split("\t");
        //console.log(elements[2]);
        switch (elements[2]) {
            case Items[0]:
                itemTot = parseInt(elements[3]) * Prices[0];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
        
            case Items[1]:
                itemTot = parseInt(elements[3]) * Prices[1];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");            
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
    
            case Items[2]:
                itemTot = parseInt(elements[3]) * Prices[2];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
        
            case Items[3]:
                itemTot = parseInt(elements[3]) * Prices[3];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
    
            case Items[4]:
                itemTot = parseInt(elements[3]) * Prices[4];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
    
            case Items[5]:
                itemTot = parseInt(elements[3]) * Prices[5];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");            
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
        
            case Items[6]:
                itemTot = parseInt(elements[3]) * Prices[6];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");            
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
    
            case Items[7]:
                itemTot = parseInt(elements[3]) * Prices[7];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
        
            case Items[8]:
                itemTot = parseInt(elements[3]) * Prices[8];
                console.log(elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK");        
                lnAnswer = elements[1] + " " + elements[2] + " (" + elements[3] + ")units " + itemTot.toFixed(2) + " ISK";
                break;
    
            default:
                break;
        };
       // useroutput.push(stringAnswer);
    };
    document.getElementById("output").innerHTML = lnAnswer;

}




//function byColumns() {
//    let userInput = document.getElementById("inp").value;
//    let data = userInput.trim()
//    let table = data.split("\n");
//    table.forEach(row => {
//        let columns = row.split("\t");
//        let charName = columns[1];
//        let itm = columns[2];
//        let itmQty = columns[3]
//        console.log(charName, itm, itmQty);
//    });
//    
//}

//function Loot(characterName, itemName, itemQty) {
//    this.charName = characterName;
//    this.itmName = itemName;
//    this.itmQty = itemQty;
//}

