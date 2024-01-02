function Genre_Function() {
    var Genre_Output;
    var Genres = document.getElementById("Genre_Input").value;
    var Genre_String = " is a great genre!";
    switch(Genres) {
        case "Blues":
            Genre_Output = "Blues" + Genre_String;
        break;
        case "Classical":
            Genre_Output = "Classical" + Genre_String;
        break;
        case "Country":
            Genre_Output = "Country" + Genre_String;
        break;
        case "Electronic":
            Genre_Output = "Electronic" + Genre_String;
        break;
        case "Folk":
            Genre_Output = "Folk" + Genre_String;
        break;
        case "Hip-hop":
            Genre_Output = "Hip-hop" + Genre_String;
        break;
        case "Jazz":
            Genre_Output = "Jazz" + Genre_String;
        break;
        case "Reggae":
            Genre_Output = "Reggae" + Genre_String;
        break;
        case "Religious":
            Genre_Output = "Religious" + Genre_String;
        break;
        case "Rock":
            Genre_Output = "Rock" + Genre_String;
        break;
        case "Traditional":
            Genre_Output = "Traditional" + Genre_String;
        break;
        default:
        Genre_Output = "Please enter a genre exactly as wrtitten above.";
    }
    document.getElementById("Output").innerHTML = Genre_Output;
}

function Change_Function() {
    var A = document.getElementsByClassName("Change");
    A[0].innerHTML = "The text has changed...";
}

var c = document.getElementById("Canvas1");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"green");
grd.addColorStop(1,"black");
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);