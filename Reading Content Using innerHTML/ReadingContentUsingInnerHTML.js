function combine(){

    var myPara = document.getElementsByClassName('para');

    var firstPara = myPara[0].innerHTML;    //Reading first para using innerHTML.
    var secondPara = myPara[1].innerHTML ;  //Reading second para using innerHTML.

    //Combine first and second para and display it in third para with index 2.
    var addParas = myPara[2].innerHTML = firstPara + secondPara;

}