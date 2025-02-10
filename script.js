// code for the header
let s = "";
s += "<h1>Yanna Medes - III-K - February 2024 </h1>"; 
s += "<h2> Basic Calculator </h2>"

document.getElementById("header").innerHTML = s;

// function for the calculator buttons.
function insert(num) {
    textview.value = textview.value+num;
}
function clean() {

}
function back() {
    const exp = textview.value;
    textview.value = exp.substring(0, exp.length-1);
}
function equal() {

}
