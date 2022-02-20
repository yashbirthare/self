var oneI = document.querySelector("#oneI");
var twoI = document.querySelector("#twoI");
var btn = document.querySelector("#btn");
var out = document.querySelector("#out");

btn.addEventListener("click", clickEventHandler);
function clickEventHandler(){
    
    var input1 = oneI.value;
    var input2 = twoI.value;

    out.innerText = ( input1 * input2);
}