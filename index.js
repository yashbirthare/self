var id = document.querySelector("#id")
var b = document.querySelector("#b")
var output = document.querySelector("#output")

b.addEventListener("click", eventhendler)

function eventhendler(event) {
    var input = id.value
    console.log(input * input * input);
    output.innerText = input * input * input
}