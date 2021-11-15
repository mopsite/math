var answer = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function plusAndMinusFor10() {
    var i = 0;
    while (i < 30) {
        var symbol = ["+", "-"];
        var randsymbol = symbol[Math.floor(Math.random() * symbol.length)];
        var a = getRndInteger(0, 10);
        var b = getRndInteger(0, 10);
        if ((randsymbol == "+") || (randsymbol == "-" && a > b)) {
            var pas = document.getElementById("pas-10");
            var qus = document.createElement("p");
            qus.setAttribute("class", "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5");
            var txt = document.createTextNode(a + " " + randsymbol + " " + b + " = ");
            qus.appendChild(txt);
            var ans = document.createElement("input");
            ans.setAttribute("type", "tel");
            ans.setAttribute("maxlength", "2");
            var ansid = "ans" + i;
            ans.setAttribute("id", ansid);
            qus.appendChild(ans);
            pas.appendChild(qus);
            answer[i] = eval(a + randsymbol + b);
            i = i + 1;
        }
    }
}

function plusAndMinusFor100() {
    var i = 0;
    while (i < 30) {
        var symbol = ["+", "-"];
        var randsymbol = symbol[Math.floor(Math.random() * symbol.length)];
        var a = getRndInteger(0, 100);
        var b = getRndInteger(0, 100);
        if ((randsymbol == "+"  && ((a >= 10 && b < 10) || (a < 10 && b >= 10) || (a >= 10 && b >= 10)))  || (randsymbol == "-" && a >= 10 && a > b)) {
            var pas = document.getElementById("pas-100");
            var qus = document.createElement("p");
            qus.setAttribute("class", "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5");
            var txt = document.createTextNode(a + " " + randsymbol + " " + b + " = ");
            qus.appendChild(txt);
            var ans = document.createElement("input");
            ans.setAttribute("type", "tel");
            ans.setAttribute("maxlength", "3");
            var ansid = "ans" + i;
            ans.setAttribute("id", ansid);
            qus.appendChild(ans);
            pas.appendChild(qus);
            answer[i] = eval(a + randsymbol + b);
            i = i + 1;
        }
    }
}

function plusAndMinusFor1000() {
    var i = 0;
    while (i < 24) {
        var symbol = ["+", "-"];
        var randsymbol = symbol[Math.floor(Math.random() * symbol.length)];
        var a = getRndInteger(0, 1000);
        var b = getRndInteger(0, 1000);
        if ((randsymbol == "+"  && ((a >= 100 && b < 100) || (a < 100 && b >= 100) || (a >= 100 && b >= 100)) && a + b < 1000) || (randsymbol == "-" && a >= 100 && a > b)) {
            var pas = document.getElementById("pas-1000");
            var qus = document.createElement("p");
            qus.setAttribute("class", "pure-u-1 pure-u-md-1-3 pure-u-lg-1-4");
            var txt = document.createTextNode(a + " " + randsymbol + " " + b + " = ");
            qus.appendChild(txt);
            var ans = document.createElement("input");
            ans.setAttribute("type", "tel");
            ans.setAttribute("maxlength", "3");
            var ansid = "ans" + i;
            ans.setAttribute("id", ansid);
            qus.appendChild(ans);
            pas.appendChild(qus);
            answer[i] = eval(a + randsymbol + b);
            i = i + 1;
        }
    }
}

function multiplication99() {
    var i = 0;
    while (i < 30) {
        var a = Math.floor(Math.random() * 10);
        var b = Math.floor(Math.random() * 10);
        var pas = document.getElementById("m99");
        var qus = document.createElement("p");
        qus.setAttribute("class", "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5");
        var txt = document.createTextNode(a + " " + "×" + " " + b + " = ");
        qus.appendChild(txt);
        var ans = document.createElement("input");
        ans.setAttribute("type", "tel");
        ans.setAttribute("maxlength", "2");
        var ansid = "ans" + i;
        ans.setAttribute("id", ansid);
        qus.appendChild(ans);
        pas.appendChild(qus);
        answer[i] = eval(a * b);
        i = i + 1;
    }
}

function multiplicationAndDivisionFor10() {
    var i = 0;
    while (i < 30) {
        var symbol = ["*", "/"];
        var randsymbol = symbol[Math.floor(Math.random() * symbol.length)];
        var a = getRndInteger(0, 100);
        var b = getRndInteger(0, 10);
        if ((randsymbol == "*" && a < 10) || (randsymbol == "/" && b != 0 && a % b == 0 && a / b < 10)) {
            var pas = document.getElementById("mad-10");
            var qus = document.createElement("p");
            qus.setAttribute("class", "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5");
            var symbolmd;
            if (randsymbol == "*") {
                symbolmd = "×";
            } else {
                symbolmd = "÷";
            }
            var txt = document.createTextNode(a + " " + symbolmd + " " + b + " = ");
            qus.appendChild(txt);
            var ans = document.createElement("input");
            ans.setAttribute("type", "tel");
            ans.setAttribute("maxlength", "2");
            var ansid = "ans" + i;
            ans.setAttribute("id", ansid);
            qus.appendChild(ans);
            pas.appendChild(qus);
            answer[i] = eval(a + randsymbol + b);
            i = i + 1;
        }
    }
}

function multiplicationAndDivisionFor100() {
    var i = 0;
    while (i < 30) {
        var symbol = ["*", "/"];
        var randsymbol = symbol[Math.floor(Math.random() * symbol.length)];
        var a = getRndInteger(0, 100);
        var b = getRndInteger(0, 100);
        if ((randsymbol == "*" && ((a >= 10 && b < 10) || (a < 10 && b >=10))) || (randsymbol == "/" && a >= 10 && b < 10 && b != 0 && a > b && a % b == 0)) {
            var pas = document.getElementById("mad-100");
            var qus = document.createElement("p");
            qus.setAttribute("class", "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5");
            var symbolmd;
            if (randsymbol == "*") {
                symbolmd = "×";
            } else {
                symbolmd = "÷";
            }
            var txt = document.createTextNode(a + " " + symbolmd + " " + b + " = ");
            qus.appendChild(txt);
            var ans = document.createElement("input");
            ans.setAttribute("type", "tel");
            ans.setAttribute("maxlength", "3");
            var ansid = "ans" + i;
            ans.setAttribute("id", ansid);
            qus.appendChild(ans);
            pas.appendChild(qus);
            answer[i] = eval(a + randsymbol + b);
            i = i + 1;
        }
    }
}

function checkAnswers() {
    var checkans = 0;
    for (var x = 0; x < document.getElementsByTagName("input").length; x++) {
        var ansid = "ans" + x;
        var input = document.getElementById(ansid);
        if (input.value == "") {
            alert("没做完！！！😡😡😡");
            return false;
        } else if (input.value == answer[x]) {
            input.style.color = "#ad4c7d";
        } else {
            input.style.color = "red";
            checkans++;
        }
    }
    if (checkans >=1) {
        alert("做错了。。。😂😂😂");
    } else {
        alert("你真棒！！！👍👍👍");
    }
}
