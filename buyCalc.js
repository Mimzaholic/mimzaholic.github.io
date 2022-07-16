const changeDate = "6/8/2022";
const priceList = {
  //DO NOT USE COMMAS IN THE NUMBERS!!!!!!!!!!!

};

var currency = {
  style: "currency",
  currency: "USD"
};
//pricelist
let headerRow = ["Item", "Price"];
let userArray = [];
for (const key in priceList) {
    let userline = "<tr><td class='item'>" +  key + "</td><td class='price'>" + priceList[key].toLocaleString("en-US", currency) + " ISK</td>";
    userArray.push(userline);
};
let text = userArray.join("</tr>");


document.querySelector("#list").innerHTML = `<h3 style='text-align: center'>Prices updated on: ${changeDate} </h3><br><table><tr><th>${headerRow[0]}</th><th>${headerRow[1]}</th></tr>${text}</table>`;

//input fields
let inputArray = []
for (const key in priceList) {
  let line = `<tr><td class='item'>${key}:</td><td class='price'><input type='number' id='${key}' name='${key}' min='0' max='1000000' step='1000' value='0'></td>`
  inputArray.push(line);
};
let inputOptions = inputArray.join("</tr>")

document.querySelector("#inputs").innerHTML = `<hr><br><table>${inputOptions}</table><button type="button" onclick="priceCalc()">Calculate</button>
<button type="reset" class="reset">Reset</button></form>`;

//calculator
function priceCalc() {
  let tritQTY = document.querySelector("#Tritanium").value;
  let tritTOT = tritQTY * priceList.Tritanium;
  let pyQTY = document.querySelector("#Pyerite").value;
  let pyTOT = pyQTY * priceList.Pyerite;
  let mexQTY = document.querySelector("#Mexallon").value;
  let mexTOT = mexQTY * priceList.Mexallon;
  let isoQTY = document.querySelector("#Isogen").value;
  let isoTOT = tritQTY * priceList.Isogen;
  let mgQTY = document.querySelector("#Megacyte").value;
  let mgTOT = pyQTY * priceList.Megacyte;
  let zyQTY = document.querySelector("#Zydrine").value;
  let zyTOT = mexQTY * priceList.Zydrine;
  let noxQTY = document.querySelector("#Nocxium").value;
  let noxTOT = mexQTY * priceList.Nocxium;
  let total = tritTOT + pyTOT + mexTOT + isoTOT + mgTOT + zyTOT + noxTOT
  let ans = `Tritanium: (${tritQTY}) units ${tritTOT.toFixed(2)} ISK <br>Pyerite: (${pyQTY}) units ${pyTOT.toFixed(2)} ISK <br>Mexallon: (${mexQTY}) units ${mexTOT.toFixed(2)} ISK <br>Isogen: (${isoQTY}) units ${isoTOT.toFixed(2)} ISK <br>Megacyte: (${mgQTY}) units ${mgTOT.toFixed(2)} ISK <br>Zydrine: (${zyQTY}) units ${zyTOT.toFixed(2)} ISK <br>Nocxium: (${noxQTY}) units ${noxTOT.toFixed(2)} <br><strong>Grand Total: ${total.toFixed(2)} ISK</strong>`;

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