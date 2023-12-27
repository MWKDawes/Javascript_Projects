function Type() {
    document.write(typeof 5);  /*display type*/
    document.write("<br>");    /*line break*/
    document.write("902" + 10);/*combine string and number*/
    document.write("<br>");    /*line break*/
    document.write(2E310);     /*print infinity*/
    document.write("<br>");    /*line break*/
    document.write(-2E310);    /*print negative infinity*/
    document.write("<br>");    /*line break*/
    document.write(10<2);      /*false statement*/
    document.write("<br>");    /*line break*/
    document.write(10>2);      /*true statement*/
    document.write("<br>");    /*line break*/
    console.log(5+5);          /*print sum in console*/
    console.log(5<3);          /*print false in console*/
    document.write(5+5==10);   /*using == to print true*/
    document.write("<br>");    /*line break*/
    document.write(5+4==10);   /*using == to print false*/
    document.write("<br>");    /*line break*/
    var A = 2                  /*define var A*/
    var B = 2                  /*define var B*/
    document.write(A===B);     /*using === to print true value and type*/
    document.write("<br>");    /*line break*/
    var C = "three"            /*defining var C*/
    document.write(C===A);     /*using === to print false due to wrong type and value*/
    document.write("<br>");    /*line break*/
    var D = "two"              /*defining var D*/
    document.write(D===A);     /*using === to print false due to wrong type*/
    document.write("<br>");    /*line break*/
    var E = 3                  /*define var E*/
    document.write(E===A);     /*using === to print false due to wrong value*/
    document.write("<br>");    /*line break*/
    document.write(5 < 6 && 10 > 5); /*using && to print true*/
    document.write("<br>");    /*line break*/
    document.write(5 > 3 && 10 < 5); /*using && to print false*/
    document.write("<br>");    /*line break*/
    document.write(5 < 6 || 10 < 5); /*using || to print true with one false statement*/
    document.write("<br>");    /*line break*/
    document.write(5 < 3 || 10 < 5); /*using || to print false*/
    document.write("<br>");    /*line break*/
    document.write(!(5>6));    /*using ! to print true*/
    document.write("<br>");    /*line break*/
    document.write(!(5<6));    /*using ! to print false*/
}