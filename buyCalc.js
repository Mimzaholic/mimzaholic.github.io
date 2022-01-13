const changeDate = "1/9/2022";
const priceList = {
  //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!!!!
  "Tritanium" : 3.82,
  "Pyerite" : 14.85,
  "Mexallon" : 47.32 
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
let text = userArray.join("</tr>");


document.querySelector(".list").innerHTML = "<h3 style='text-align: center'>Prices updated on: " + changeDate + "</h3><br><table id='priceTable'><tr><th>" + headerRow[0] + "</th><th> " + headerRow[1] + "</th></tr>" + text + "</table>";

function priceCalc() {
  let tritQTY = document.querySelector("#trit").value;
  let tritTOT = tritQTY * priceList.Tritanium;
  let pyQTY = document.querySelector("#py").value;
  let pyTOT = pyQTY * priceList.Pyerite;
  let mexQTY = document.querySelector("#mex").value;
  let mexTOT = mexQTY * priceList.Mexallon;
  let total = tritTOT + pyTOT + mexTOT
  let ans = "Tritanium: (" + tritQTY + ") units " + tritTOT +" ISK <br>Pyerite: (" + pyQTY + ") units " + pyTOT + " ISK <br>Mexallon: (" + mexQTY + ") units " + mexTOT + " ISK <br><strong>Grand Total: " + total +" ISK</strong></div>";

  document.querySelector("#output").innerHTML = ans;

}

/*            const TRITISK = 3.82;
            const PYISK = 14.85;
            const MEXISK = 47.32;
            var answer

            function priceCalc() {
              let tritQty = parseInt(document.querySelector("#trit").value);
              let pyQty = parseInt(document.querySelector("#py").value);
              let mexQty = parseInt(document.querySelector("#mex").value);
              let tritTot = tritQty * TRITISK;
              let pyTot = pyQty * PYISK;
              let mexTot = mexQty * MEXISK;
              let grandTot = tritTot + pyTot + mexTot
              answer = "Tritanium: (" + tritQty + ") units   " + tritTot.toFixed(2) + " ISK<br>Pyerite: (" + pyQty + ") units   " + pyTot.toFixed(2) + " ISK<br>Mexallon: (" + mexQty + ") units   " + mexTot.toFixed(2) + " ISK<br><strong>Grand Total: " + grandTot.toFixed(2) + " ISK</strong><br><br>Copy and paste this into an Eve-Mail to <a href='faq.html#mimz'>Heinrik Liat Cadelanne</a> ";
              cpyanswer = " Trit:" + tritQty + " Pye:" + pyQty + " Mex:" + mexQty + " Contract Total:" + grandTot.toFixed(2);

            }
*/

            function copyData() {
              var copyText = document.getElementById("cpy");
              copyText.select();
              copyText.setSelectionRange(0, 99999);  /*For mobile devices */
              navigator.clipboard.writeText(copyText.value);
              alert("Copied the text: " + copyText.value);
            };