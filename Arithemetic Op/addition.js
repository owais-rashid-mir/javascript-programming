function calculateSum(){

    /* Everything that's entered by the user in text boxes , JS treats
       them as Strings. Here, when we get the numbers from the user
       , they are treated as Strings. So, when we add them, JS 
       concatenates them intead of adding them. That's why we need to 
       use parseInt to convert the entered numbers into integers.
       If we don't use parseInt, the entered numbers will be concaten-
       ated.
    */
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);

    /* We can also use 'Number' instead of 'parseInt'
        E.g- var num1 = Number(document.getElementById("n1").value);
     */

    document.write( "The sum = " + (num1+num2) );
}