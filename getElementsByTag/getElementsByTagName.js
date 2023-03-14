function changeStyle(){

    /*'p' parameter in getElementsByTagName is name of 
      the html tag <p>. Similarly, we can use other tags
      like "body" etc.
   */
    var myPara = document.getElementsByTagName("p");

    //Change color of the first para. 0 is the index.
    var changeMyPara = myPara[0].style.color="red";

    //Change color of the second para. 1 is the index.
    var changeMyPara = myPara[1].style.color="red";

    //Change color of the third para. 2 is the index.
    var changeMyPara = myPara[2].style.color="red";

    //if there are more <p>, we can use a loop.
}