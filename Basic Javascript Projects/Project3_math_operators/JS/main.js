function MathFunction() {  /*Function creation for subtraction*/
    var total1  = 5 - 4; /*Formula for subtraction*/
    document.getElementById('Math').innerHTML = total1 /*replace id with end of function*/
}

function multiplication() { /*Function creation for multiplication*/
    var simple_Math1 = 5 * 4; /*Formula for mutiplication*/
    document.getElementById('Math2').innerHTML = simple_Math1 /*replace id with end of function*/
}

function more_Math() { /*Function creation for a joined math formula*/
    var simple_Math2 = (1 + 2) * 10 / 2 - 5; /*Formula for multiple operations*/
    document.getElementById("Math3").innerHTML = simple_Math2 /*replace id with end of function*/
}

function modulus_Operator() { /*Function creation for division*/
    var simple_Math3 = 25 % 6; /*Formula for division*/
    document.getElementById("Math4").innerHTML = simple_Math3 /*replace id with end of function*/
}

function negation_Operator() { /*Function creation for variable negation*/
    var x = 10; /*variable creation to be negated*/
    document.getElementById("Math5").innerHTML = -x /*formula for negating the variable and replacing id*/
}

function MathFunction2() { /*Function creation for addition*/
    var total2  = 5 + 4; /*Formula for addition*/
    document.getElementById('Math6').innerHTML = total2 /*replace id with end of function*/
}

function Addone() { /*Function creation for ++ operation*/
    var A = 5; /*variable creation to be added to*/
    A++; /*formula for ++ operation*/
    document.getElementById('Math7').innerHTML = A; /*replace id with end of function*/
}

function Minusone() { /*Function creation for -- operation*/
    var B = 5.5; /*variable creation to be subtracted from*/
    B--; /*formula for -- operation*/
    document.getElementById('Math8').innerHTML = B; /*replace id with end of function*/
}

var C = Math.random() * 100; /*Function creation for random number window popup*/
window.alert(Math.round(C)); /*popup window to display end of function*/