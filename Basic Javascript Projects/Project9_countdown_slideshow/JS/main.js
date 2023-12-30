function countdown() {
    var seconds = document.getElementById("seconds").value;             /*connect variables for seconds to id for properties in HTML*/

    function tick() {                                                   /*create tick function*/
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout (tick,1000);
        if (seconds == -1) {                                            /*Utilize if property to count down by 1*/
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();

    
}

let slideIndex = 1;             
showSlides(slideIndex);

/*Set next/previous controls */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/*Set thumbnail controls*/
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}