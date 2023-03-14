function changeText(){

    var myPara = document.getElementsByClassName('para');

    //Writing text on first para using innerHTML and replacing the existing text of HTML file.
    var firstPara = myPara[0].innerHTML = "Bye Bye";  
    
    //Writing text on second para using innerHTML and replacing the existing text of HTML file
    //with an empty space.
    var secondPara = myPara[1].innerHTML = " " ;  //writing second para using innerHTML.


}