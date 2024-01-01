function Call_Loop() {
    var Num = "";
    var Currentnum = 1;
    while (Currentnum < 6) {
        Num += "<br>" + Currentnum;
        Currentnum++;
    }
    document.getElementById("Loop").innerHTML = Num
}

function Textlength() {
    let sentence = "Let's go ahead and see how long this string of text is..."
    let length = sentence.length
    document.getElementById("length").innerHTML = length 
}

var SayAnything = ["Max Bemis", "Coby Linder", "Alex Kent", "Parker Case", "Brian Warren", "Fred Mascherino"];
var members = "";
var Y;

function for_Loop() {
    for (Y=0; Y < SayAnything.length; Y++) {
        members += SayAnything[Y] + "<br>";
    }
    document.getElementById("Band_Members").innerHTML = members
}

function array_Function() {
    var FooFighter = [];
    FooFighter[0] = "Dave Grohl";
    FooFighter[1] = "Taylor Hawkins";
    FooFighter[2] = "Nate Mendel";
    FooFighter[3] = "Pat Smear";
    FooFighter[4] = "Chris Shiflett";
    FooFighter[5] = "Rami Jaffee";
    FooFighter[6] = "Josh Freese";
    document.getElementById("Array").innerHTML = "A member of the band Foo Fighters is " +
        FooFighter[1] + ".";
}

function constant_function() {
    const bestGuitarPlayer = {Artist: "Stevie Ray Vaughan", Genre: "Blues"};
    bestGuitarPlayer.Genre = "Texas Blues Rock";
    bestGuitarPlayer.AgeAtDeath = 35
    document.getElementById("Constant").innerHTML = "The best guitar player to have ever lived is " + 
    bestGuitarPlayer.Artist + ". He plays " + bestGuitarPlayer.Genre + " and died at age " + bestGuitarPlayer.AgeAtDeath + ".";
}

const answer = ALittleMath(3,4);

function ALittleMath(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        return num1 * num2;
    }
    return "Be Positive!"    
}
 
document.getElementById("Answer").innerHTML = answer

function ObjectMethod() {
    let guitar = {
        Make: "Gibson",
        Style: "SG",
        Shape: "EDS-1275 Doubleneck",
        Material: "Solid Mahogany",
        description: function() {
            return "This guitar is a " + this.Make + " " + this.Style + " " + this.Shape + " made of " + this.Material;
        }
    };
    document.getElementById("GuitarSG").innerHTML = guitar.description();
}

function Countdown() {
    for (let i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        document.getElementById("Counting").innerHTML = i
    }
}