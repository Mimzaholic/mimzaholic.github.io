const changeDate = "2/26/2022";
const priceList = {
    //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!
    "Veldspar" :	10.43	,
    "Concentrated Veldspar" :	10.05	,
    "Dense Veldspar" :	12.15	,
    "Scordite" :	16.03	,
    "Condensed Scordite" :	15.3	,
    "Massive Scordite" :	16.9	,
    "Pyroxeres" :	27.3	,
    "Solid Pyroxeres" :	29.17	,
    "Viscous Pyroxeres" :	29.71	,
                    
    "Clear Icicle" :	165751	,
    "Compressed Clear Icicle" :	165751	,
                    
    "Bitumens" :	1301	,
    "Brimful Bitumens" :	1501	,
    "Glistening Bitumens" :	2501	,
    "Coesite" :	1501	,
    "Brimful Coesite" :	1726	,
    "Glistening Coesite" :	2701	,
    "Sylvite" :	1401	,
    "Brimful Sylvite" :	1651	,
    "Glistening Sylvites" :	2801	,
    "Zeolites" :	1501	,
    "Brimful Zeolites" :	1726	,
    "Glistening Zeolites" :	2701	,
                    
    "Liquid Ozone" :	145.52	,
    "Precious Metals" :	636.72	,
    "Water" :	488	,
    "Oxygen" :	594	,
    "Helium Isotopes" :	425.738	,
    "Proteins" :	1198.4	,
    "Strontium Clathrates" :	3944	,
    "Mechanical Parts" :	6480	,
    "Enriched Uranium" :	7958.4	,
    "Coolant" :	9120	,
    "Robotics" :	54712	,
    "Toxic Metals" :	272	,
    "Reactive Metals" :	351.2	,
    "Chiral Structures" :	599.2	,
    "*FUEL*" :	0	,
    "Helium Fuel Block" :	14541	,
    "Heavy Water" :	137.53	,
                    
    "Alloyed Tritanium Bar" :	7392.45	,
    "Ancient Radar Decorrelator" :	14186.5	,
    "Armor Plates" :	25075	,
    "Artificial Neural Network" :	1172.15	,
    "Broken Drone Transceiver" :	16150	,
    "Burned Logic Circuit" :	16983	,
    "Capacitor Console" :	584715	,
    "Cartesian Temporal Coordinator" :	10625	,
    "Charred Micro Circuit" :	277.44	,
    "Conductive Polymer" :	13413	,
    "Conductive Thermoplastic" :	13430	,
    "Contaminated Lorentz Fluid" :	109565	,
    "Contaminated Nanite Compound" :	54748.5	,
    "Current Pump" :	20619	,
    "Damaged Artificial Neural Network" :	508.3	,
    "Defective Current Pump" :	4751.5	,
    "Defensive Control Node" :	26936.5	,
    "Drone Capillary Fluid" :	13591.5	,
    "Drone Transceiver" :	326400	,
    "Electromechanical Hull Sheeting" :	1734	,
    "Electromagnetic Metaprismatic Sheeting" :	29750	,
    "Emergent Combat Analyzer" :	13583	,
    "Emergent Combat Intelligence" :	22414.5	,
    "Fried Interface Circuit" :	1423.75	,
    "Fused Nanomechanical Engines" :	9265	,
    "Heuristic Selfassemblers" :	17000	,
    "Hyperbolic Metatransistor Array" :	10200	,
    "Impetus Console" :	187000	,
    "Interface Circuit" :	7856.55	,
    "Logic Circuit" :	532865	,
    "Lorentz Fluid" :	150450	,
    "Malfunctioning Shield Emitter" :	678.3	,
    "Melted Capacitor Console" :	17323	,
    "Melted Nanoribbons" :	39499.5	,
    "Metal Scraps" :	966.45	,
    "Micro Circuit" :	2956.3	,
    "Modified Fluid Router" :	2505.8	,
    "Nanite Compound" :	509915	,
    "Neurovisual Input Matrix" :	178330	,
    "Powdered C-540 Graphite" :	2543.2	,
    "Power Circuit" :	288065	,
    "Power Conduit" :	1147500	,
    "Resonance Calibration Matrix" :	15849	,
    "Scorched Microgravimeter" :	147330	,
    "Scorched Telemetry Processor" :	3312.45	,
    "Smashed Trigger Unit" :	5077.05	,
    "Synthetic Aperture Ladar Receiver" :	131410	,
    "Tangled Power Conduit" :	132090	,
    "Telemetry Processor" :	36201.5	,
    "Thermoelectric Catalysts" :	62883	,
    "Thruster Console" :	13685	,
    "Trigger Unit" :	1253750	,
    "Tripped Power Circuit" :	1526.6	,
    "Ultraconducting Ablative Nanocable" :	11900	,
    "Ward Console" :	24624.5	,
                    
    "Hydrocarbons" :	1618.2	,
    "Silicates" :	2070	,
    "Evaporite Deposits" :	1569.6	,
    "Atmospheric Gases" :	1668.6	,
                    
    "Mexallon" :	63	,
    "Tritanium" :	3.78	,
    "Pyerite" :	11.2	,
    "Isogen" :	170.08	,
    "Megacyte" :	1264	,
    "Morphite" :	40040	,
    "Nocxium" :	1103.2	,
    "Zydrine" :	900	,
                    
    "Compressed Veldspar" :	1043	,
    "Compressed Concentrated Veldspar" :	1005	,
    "Compressed Dense Veldspar" :	1215	,
    "Compressed Scordite" :	1603	,
    "Compressed Condensed Scordite" :	1530	,
    "Compressed Massive Scordite" :	1690	,
    "Compressed Pyroxeres" :	2730	,
    "Compressed Solid Pyroxeres" :	2917	,
    "Compressed Viscous Pyroxeres" :	2971	
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