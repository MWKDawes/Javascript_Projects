function Ride_Function() {
    var Height, Can_ride;                                                   /*creation of Height and Can_Ride variables*/
    Height = document.getElementById("Height").value;                       /*Tying Height variable to Height ID from HTML*/
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   /*Populating Can_ride key with value to print if they are too short to ride or not*/
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";     /*Populates P element with Ride id to display Can_Ride outcome with "to ride" added on*/
}

function Guitar(Make, Model, Wood, Color) {                                 /*creates constructor to populate values given by following code*/
    this.Guitar_Make = Make;
    this.Guitar_Model = Model;
    this.Guitar_Wood = Wood;
    this.Guitar_Color = Color;
}
var Stevie = new Guitar("Fender", "Stratocaster", "Rosewood", "Sunburst")   /*Creates variable with new values to populate Guitar function*/
function Clickiddy() {
    document.getElementById("New_and_This").innerHTML =                     /*populates p element with New_and_This id with sentence explaining Guitar values*/
    "Stevie plays a " + Stevie.Guitar_Color + "-colored " + Stevie.Guitar_Make + " " 
    + Stevie.Guitar_Model + " made of " + Stevie.Guitar_Wood;
}

function Click() {
    document.getElementById("Nested_Function").innerHTML = Count();         /*populates p element with Nested_function id with counting function*/
        function Count () {
            var Starting_point = 0;                                         /*Starts the starting point variable at 0*/
            function Plus_one() {Starting_point += 1;}                      /*creates plus one function to add one to starting point*/
            Plus_one();                                                     /*runs plus_one function*/
            return Starting_point;                                          /*return new Starting_point*/
        } 
}