const changeDate = "1/9/2022";
const priceList = {
    //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!
    "Veldspar": 10.11,
    "Concentrated Veldspar": 10.91,
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
    "Clear Icicle": 186150.00
};
let headerRow = ["Item", "Price"];
let userArray = [];
for (const key in priceList) {
    //console.log(key, priceList[key]);
    let userline = key + " " + priceList[key] + " ISK";
    userArray.push(userline);
}
console.log(userArray);
let text = userArray.join("<br>")


document.querySelector(".list").innerHTML = "<h4 style='text-align: center'>Updated on: " + changeDate + "</h4><br>" + headerRow[0] + " " + headerRow[1] + "<br>" + text;
