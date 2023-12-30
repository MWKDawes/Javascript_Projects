function Full_sentence() {                                           /*function to create different parts of a sentence with variables s1-s4*/
    var s1 = "The best video ";
    var s2 = "game series is ";
    var s3 = "The Legend of ";
    var s4 = "Zelda!"
    fullsentence = s1.concat(s2, s3, s4);                           /*creates a variable to concatonate s1, s2, s3, and s4*/
    document.getElementById("Lesgo").innerHTML = fullsentence       /*pushes fullsentence to p element with Lesgo id*/
}

function Slicendice() {                                                 
    var Sentence = "If someone calls Link Zelda again, I'm gonna..."    /*Creates sentence variable*/
    var Section = Sentence.slice(17, 21)                                /*slices "Link" out of Sentence string*/
    document.getElementById("SayHisName").innerHTML = Section;          /*populates p element with SayHisName id with Section string*/
}

function Slicendice2() {
    var Sentence2 = "This is a much longer string just to make sure I am utilizing the search method more, but that being said the answer to the question I posed was Link, the main protagonist of Legend of Zelda is Link.";  /*string to find Link in*/
    var Section2 = Sentence2.search("Link");                                                                                                                                                                                    /*locates first instance of Link*/
    var Section2again = Sentence2.slice(Section2, Section2 + 4)                                                                                                                                                                 /*slices Link out using first instance found and adding 4 for each letter*/
    document.getElementById("SayHisNameAgain").innerHTML = Section2again.toUpperCase();                                                                                                                                         /*populates p element using SayHisNameAgain id with sliced string*/ 
}

function StringNumber() {
    var Games = 29;                                                     /*number of LoZ games put into variable*/
    document.getElementById("GameNum").innerHTML = Games.toString();    /*displays variable in string*/
}

function ThatsAlotOfData() {
    var GBdata = 106.438384                                                                 /*assigns number of GBs to variable*/
    document.getElementById("DataSize").innerHTML = GBdata.toPrecision(6) + " GigaBytes";   /*populates p element using DataSize id with variable using 6 digits and a string*/
}

function StillAlotOfData() {
    var MBdata = 106438.384                                                                     /*assigns number of MBs to variable*/
    document.getElementById("DataSize2").innerHTML = MBdata.toFixed(1) + "MegaBytes".valueOf(); /*populates p element using DataSize2 id with variable using 1 decimal place to the left and a string*/
}