function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Guitar(Make, Model, Wood, Color) {
    this.Guitar_Make = Make;
    this.Guitar_Model = Model;
    this.Guitar_Wood = Wood;
    this.Guitar_Color = Color;
}
var Stevie = new Guitar("Fender", "Stratocaster", "Rosewood", "Sunburst")
function Clickiddy() {
    document.getElementById("New_and_This").innerHTML = 
    "Stevie plays a " + Stevie.Guitar_Color + "-colored " + Stevie.Guitar_Make + " " 
    + Stevie.Guitar_Model + " made of " + Stevie.Guitar_Wood;
}

function Click() {
    document.getElementById("Nested_Function").innerHTML = Count();
        function Count () {
            var Starting_point = 0;
            function Plus_one() {Starting_point += 1;}
            Plus_one();
            return Starting_point;
        } 
}