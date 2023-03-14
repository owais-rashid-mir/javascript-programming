//First way to declare an array.
var arr = [];

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
document.write(arr[0] + "<br>");
document.write(arr[1] + "<br>");
document.write(arr[2] + "<br> <br>");

//Second way to declare an array.
/*Unlike other languages, we use long braces [] instead ...
  of curly braces {} in Arrays. */
var fruits = ["apples" , "oranges" , "peaches" ];
document.write(fruits[0] + "<br>");
document.write(fruits[1] + "<br>");
document.write(fruits[2] + "<br>");
document.write(fruits[3] + "<br> <br>");

//Printing entire array using a for loop.
var linuxDistros = ["Ubuntu" , "Kali Linux" , "Fedora" ];
for(var i=0 ; i<linuxDistros.length ; i++){
   document.write(linuxDistros[i] + "<br>");
}

document.write("<br>");

//or, you can also print the previous array like this:
document.write(linuxDistros);

document.write("<br> <br>");

/*third way to declare an array. However, this is not recommended. For 
simplicity, readability and execution speed, use the second method. */
var cars = new Array("BMW" , "Volvo" , "Porsche");
document.write(cars);

document.write("<br> <br>");

//Adding an array element
var food = ["Bread" , "rice" ];
document.write(food);

document.write("<br>");

food.push("chapatis");
document.write("After using push() : " + food);