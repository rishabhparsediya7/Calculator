var result = document.getElementById("result");
var previous = [];
var query = document.getElementById("query");

function shownumber(num) {
    if (num === "%")
        num = "/";
    console.log(previous);
    if (result === null)
        result = "";
    if (num === "C") {
        previous = [];
        result = "";
        document.getElementById("query").innerHTML = "";
    } else if (num === '=') {
        document.getElementById("query").innerHTML = result;
        document.getElementById("query").style.marginTop = "-34px";
        solve(result);
    } else if (num === 'Del') {
        document.getElementById("query").innerHTML = "";
        previous.pop();
        result = getString(previous);
    } // result = Math.floor(result / 10);
    else
        result += num;
    document.getElementById("result").innerHTML = result;
    if (num !== "Del" && num !== "C" && num !== "=")
        previous.push(num);

}

function solve(query) {
    result = "";

    result = eval(query);
    console.log(query);
    console.log(eval(query));
}

function getString(arr) {
    var c = arr.toString();
    var s = "";
    c.split(/\s*,\s*/).forEach(function(myString) {
        s += myString;
    });
    return s;
}