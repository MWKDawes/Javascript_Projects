BestGame = "God of War..."                                                          /*Populating the BestGame variable with the objective best game*/
function YouKnowIt() {                                                              
    document.getElementById("Best_Game").innerHTML = BestGame                       /*populating p element with Best_Game id with BestGame variable*/
}

function YouStillKnowIt () {
    BesterGame = "Still God of War"                                                 /*Populating the BesterGame variable with the objective bester game*/
    BestestGame = "Anything other than God Of War"                                  /*Populating the BestestGame variable with the objective wrong answer for the bestest game*/
    document.getElementById("Bester_Game").innerHTML = BesterGame                   /*populating p element with Bester_Game id with BesterGame variable*/
}

function TheresAReasonThisIsBroken () {
    console.log(document.getElementById("Bestest_Game").innerHTML = BestestGame)    /*populating p element with Bestest_Game id with BestestGame variable (which is wrong and in a different function*/
}

function GetHours() {
    if (new Date().getHours() < 12) {                                               /*staating if the time is before 2pm*/
    document.getElementById("Hours").innerHTML = "Good Morning!";                   /*populating p element with Hours id with string if time is before 12pm*/
    }
    else {document.getElementById("Hours").innerHTML = "Good Evening!"              /*populating p element with Hours id with string if time is after 12pm*/
    }
}

function SayIt() {
    ItIsThough = document.getElementById("ItIsThough").value;                       /*tying ItISThough function variable with id element from HTML*/
    if (ItIsThough == "God of War") {                                               /*stating if the person gives the correct answer...*/
        Answer = "That's right! Well done!!!"                                       /*...print That's right string and tie it to Answer variable*/
    }
    else {                                                                          /*stating else if they put the wrong answer...*/
        Answer = "WRONG!! HAVEN'T YOU BEEN PAYING ATTENTION!?";                     /*...verbally tear them down and tie that to Answer variable*/
    }
    document.getElementById("SayIt").innerHTML = Answer;                            /*populate p element with SayIt id with Answer variable
}