function changeStyle(){

    var myPara = document.getElementsByTagName("p");

    for(var i=0 ; i<myPara.length ; i++){
        myPara[i].style.color = "red";
    }

}