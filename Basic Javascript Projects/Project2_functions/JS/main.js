var A = ('Let\'s see...'), B = ('if this works.');          // Define variables A and B

function Button_Function() {                                // Defining a function utilized by HTML
    var str = "It worked?"                                  // Defining variable str1
    var str2 = "It worked!"                                 // Defining variable str2
    document.getElementById('Paragraph1').innerHTML = str;     // Pulling keys from HTML and pushing values defined from previous JS function
    document.getElementById('Paragraph2').innerHTML = A + B;    // This line utilizes concatenation of A and B
}                                                               