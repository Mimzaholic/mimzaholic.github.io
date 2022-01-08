            const TRITISK = 3.82;
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

            function copyData() {
              var copyText = document.getElementById("cpy");
              copyText.select();
              copyText.setSelectionRange(0, 99999); /* For mobile devices */
              navigator.clipboard.writeText(copyText.value);
              alert("Copied the text: " + copyText.value);
            }

          