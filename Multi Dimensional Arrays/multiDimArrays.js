/* Multi Dimensional arrays are not directly provided in
JS. If we want to use anything which acts a multi-
dimensional array, we need to create it by using another
one-dimensional array.
*/

var arr = [
                [10 , 20 , 30],
                [40 , 50 , 60],
                ["abc" , "def" , "ghi"],
];

document.write(arr[1][2] + "<br> <br>"); //60 is printed.

//printing entire array.
for(var i=0 ; i<arr.length ; i++){
    for(var j=0 ; j<arr[i].length ; j++){
        document.write( arr[i][j] + " ");
    }
    document.write("<br>");
}

document.write("<br>");

//or, we can also print the entire array as:
document.write(arr);