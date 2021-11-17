            const TRITISK = 3.82;
            const PYISK = 14.85;
            const MEXISK = 47.32;
            var answer

            function priceCalc() {
              let char = document.querySelector("#userSelector").value;
              let tritQty = parseInt(document.querySelector("#trit").value);
              let pyQty = parseInt(document.querySelector("#py").value);
              let mexQty = parseInt(document.querySelector("#mex").value);
              let tritTot = tritQty * TRITISK;
              let pyTot = pyQty * PYISK;
              let mexTot = mexQty * MEXISK;
              let grandTot = tritTot + pyTot + mexTot
              answer ="<strong>" + char + "</strong><br>Tritanium: (" + tritQty + ") units   " + tritTot.toFixed(2) + " ISK<br>Pyerite: (" + pyQty + ") units   " + pyTot.toFixed(2) + " ISK<br>Mexallon: (" + mexQty + ") units   " + mexTot.toFixed(2) + " ISK<br><strong>Grand Total: " + grandTot.toFixed(2) + " ISK</strong><br><br>Copy and paste this into an Eve-Mail to <a href='faq.html#mimz'>Heinrik Liat Cadelanne</a> ";
              cpyanswer = char + " Trit:" + tritQty + " Pye:" + pyQty + " Mex:" + mexQty + " Contract Total:" + grandTot.toFixed(2);

              if (char != "SELECT A USER") {
                document.querySelector("#output").innerHTML = answer;
                document.querySelector("#cpy").innerHTML = cpyanswer;  
              } else {
                alert("Please select your character")
              }
            }

            /*  reset function below does not work
            function reset() {
              document.querySelector("#cpy").innerHTML.value = " ";
            }
            */

            function copyData() {
              var copyText = document.getElementById("cpy");
              copyText.select();
              copyText.setSelectionRange(0, 99999); /* For mobile devices */
              navigator.clipboard.writeText(copyText.value);
              alert("Copied the text: " + copyText.value);
            }

          