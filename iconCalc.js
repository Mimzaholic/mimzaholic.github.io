const changeDate = "1/9/2022";
const priceList = {
    //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!
    "Veldspar" :	12.59	,
"Concentrated Veldspar" :	11.86	,
"Dense Veldspar" :	12.6	,
"Scordite" :	19.79	,
"Condensed Scordite" :	19.35	,
"Massive Scordite" :	19.8	,
"Pyroxeres" :	30.6	,
"Solid Pyroxeres" :	31.95	,
"Viscous Pyroxeres" :	32.4	,
"Plagioclase" :	27.35	,
"Azure Plagioclase" :	28.72	,
"Rich Plagioclase" :	30.09	,
"Sparkling Plagioclase" :	31.45	,
"Jaspet" :	450	,
"Pristine Jaspet" :	450	,
"Pure Jaspet" :	495	,
"Immaculate Jaspet" :	720	,
"Clear Icicle" :	170820	,
"Compressed Clear Icicle" :	170820	,
"Bitumens" :	1800	,
"Brimful Bitumens" :	2070	,
"Glistening Bitumens" :	2900	,
"Coesite" :	1500	,
"Brimful Coesite" :	1725	,
"Glistening Coesite" :	2700	,
"Sylvite" :	1800	,
"Brimful Sylvite" :	2070	,
"Glistening Sylvites" :	3000	,
"Zeolites" :	1500	,
"Brimful Zeolites" :	1725	,
"Glistening Zeolites" :	2700	,
"Liquid Ozone" :	150.84	,
"Precious Metals" :	435.6	,
"Water" :	440.1	,
"Oxygen" :	493.2	,
"Helium Isotopes" :	512.64	,
"Proteins" :	801	,
"Strontium Clathrates" :	3419.1	,
"Mechanical Parts" :	6480	,
"Enriched Uranium" :	8370	,
"Coolant" :	8955	,
"Robotics" :	55980	,
"Toxic Metals" :	280.8	,
"Reactive Metals" :	214.2	,
"Chiral Structures" :	444.51	,
"Helium Fuel Block" :	14850	,
"Alloyed Tritanium Bar" :	4500	,
"Ancient Radar Decorrelator" :	20862	,
"Armor Plates" :	22320	,
"Artificial Neural Network" :	1699.2	,
"Broken Drone Transceiver" :	14598	,
"Burned Logic Circuit" :	16236	,
"Capacitor Console" :	486900	,
"Cartesian Temporal Coordinator" :	12600	,
"Charred Micro Circuit" :	304.02	,
"Conductive Polymer" :	17316	,
"Conductive Thermoplastic" :	11214	,
"Contaminated Lorentz Fluid" :	115740	,
"Contaminated Nanite Compound" :	54009	,
"Current Pump" :	20619	,
"Damaged Artificial Neural Network" :	877.5	,
"Defective Current Pump" :	5850	,
"Defensive Control Node" :	48060	,
"Drone Capillary Fluid" :	16884	,
"Drone Transceiver" :	339840	,
"Electromechanical Hull Sheeting" :	765	,
"Electromagnetic Metaprismatic Sheeting" :	12591	,
"Emergent Combat Analyzer" :	13401	,
"Emergent Combat Intelligence" :	27900	,
"Fried Interface Circuit" :	1798.2	,
"Fused Nanomechanical Engines" :	11700	,
"Heuristic Selfassemblers" :	17000	,
"Hyperbolic Metatransistor Array" :	7648.2	,
"Impetus Console" :	99000	,
"Interface Circuit" :	12681	,
"Logic Circuit" :	615600	,
"Lorentz Fluid" :	241920	,
"Malfunctioning Shield Emitter" :	1117.8	,
"Melted Capacitor Console" :	12735	,
"Melted Nanoribbons" :	51903	,
"Metal Scraps" :	990	,
"Micro Circuit" :	2808.9	,
"Modified Fluid Router" :	2204.1	,
"Nanite Compound" :	413910	,
"Neurovisual Input Matrix" :	163530	,
"Powdered C-540 Graphite" :	3058.2	,
"Power Circuit" :	368550	,
"Power Conduit" :	809100	,
"Resonance Calibration Matrix" :	15849	,
"Scorched Microgravimeter" :	147330	,
"Scorched Telemetry Processor" :	13500	,
"Smashed Trigger Unit" :	9180	,
"Synthetic Aperture Ladar Receiver" :	172170	,
"Tangled Power Conduit" :	116820	,
"Telemetry Processor" :	20655	,
"Thermoelectric Catalysts" :	82620	,
"Thruster Console" :	12555	,
"Trigger Unit" :	1260000	,
"Tripped Power Circuit" :	1440.9	,
"Ultraconducting Ablative Nanocable" :	5595.3	,
"Ward Console" :	28970	,
"Compressed Veldspar" :	1229	,
"Compressed Concentrated Veldspar" :	1114	,
"Compressed Dense Veldspar" :	1107	,
"Compressed Scordite" :	1881	,
"Compressed Condensed Scordite" :	1634	,
"Compressed Massive Scordite" :	1890	,
"Compressed Pyroxeres" :	2298	,
"Compressed Solid Pyroxeres" :	2450	,
"Compressed Viscous Pyroxeres" :	2349	,
"Compressed Plagioclase" :	2735	,
"Compressed Azure Plagioclase" :	2872	,
"Compressed Rich Plagioclase" :	3009	,
"Compressed Sparkling Plagioclase" :	3145	,
"Compressed Jaspet" :	45000	,
"Compressed Pristine Jaspet" :	45000	,
"Compressed Pure Jaspet" :	49500	,
"Compressed Immaculate Jaspet" :	72000	
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