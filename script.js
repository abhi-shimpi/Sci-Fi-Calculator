
var mainString = "";
var op = "";
var showbox = document.getElementById('dispalay-box');

function backspace(temp) {                                            
    size = showbox.innerHTML.length;
    sizeOfN = mainString.length;
    mainString = mainString.substring(0, size-1)
    showbox.innerHTML = showbox.innerHTML.substring(0, size-1);
}

function onclickFunction(ele) {
    mainString += ele.value;
    showbox.innerHTML = mainString;
}

function operator(sign) {
    op = sign.value;
    mainString = mainString + op;
    showbox.innerHTML = mainString;
}

function operatorPerc() {
    var perc = mainString + "/" + "100";
    mainString = eval(perc);
    showbox.innerHTML = mainString;
}

function changeValue() {
    if (!mainString) {
        showbox.innerHTML = "NaN";
    } else if (mainString > 0) {
        mainString = "-" + mainString;
        showbox.innerHTML = mainString;
    } else {
        var r = "";
        r += eval("-mainString");
        mainString = r;
        showbox.innerHTML = mainString;
    }
}

function result() {
    if(mainString.includes("!")) {       
        size = mainString.length;
        mainString = Number(n.substring(0, size-1));
        f = 1;
         
        for(i = 2; i <= mainString; i++)
            f = f*i;
        mainString = f;
    }
     
    console.log("result :" + eval(mainString));
    mainString = eval(mainString);
    showbox.innerHTML = mainString;

}

showbox.addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        showbox.innerHTML = eval(showbox.innerHTML);
    }
})

function clearDisplay() {
    mainString = "";
    showbox.innerHTML = "";
}