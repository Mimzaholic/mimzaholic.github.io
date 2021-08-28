function calc() {
    var a = parseInt(document.querySelector("#val1").value)  ;
    var b = parseInt(document.querySelector("#val2").value)  ;
    var op = document.querySelector("#op").value ;
    var calculate;

    if (op == "add"){
        calculate = a + b;
    } else if (op == "sub") {
        calculate = a - b;
    } else if (op == "mul") {
        calculate = a * b;
    } else if (op == "dvd") {
        calculate = a / b;
    } 

    document.querySelector("#result").innerHTML = calculate;
}